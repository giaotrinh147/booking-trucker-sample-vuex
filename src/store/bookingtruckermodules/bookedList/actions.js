import truckersList from '../../../api/truckers'

export const actions = {
    FinishBooking ({ commit, state}, truckers) {
        const bookedTruckers = [...state.items]
        commit('setFinishBookingStatus', null)
        // empty booking
        commit('setBookedTruckers', {items: [] })
        truckersList.bookTruckers(
            truckers,
            () => commit('setFinishBookingStatus', 'successful'),
            () => {
                commit('setFinishBookingStatus', 'failed')
                //rollback to the booked list before sending request
                commit('setBookedTruckers', { items: bookedTruckers })
            }
        )
    },

    addTruckerToBookedList ({ state, commit}, trucker) {
        commit('setFinishBookingStatus', null)
        if (trucker.inventory > 0) {
            const bookedTrucker = state.items.find(item => item.id === trucker.id)
            if(!bookedTrucker) {
                commit('pushTruckerToBookedList', { id: trucker.id})
            } else {
                commit('incrementTruckerQuantity', bookedTrucker)
            }
            //remove 1 trucker from inventory
            commit('truckers/decrementTruckerInventory', {id: trucker.id}, {root: true})
        }
    },

    deleteTruckerFromBookedList ({ state, commit}, trucker) {
        commit('setFinishBookingStatus', null)
            const bookedTrucker = state.items.find(item => item.id === trucker.id)
            if(bookedTrucker.quantity > 1)
            {
            commit('decrementTruckerQuantity', bookedTrucker)
            //remove 1 trucker from inventory
            commit('truckers/incrementTruckerInventory', {id: bookedTrucker.id}, {root: true})
            }
            else 
            {
                const index = state.items.findIndex(trucker => trucker.id == bookedTrucker.id)
                //remove 1 trucker from inventory
                commit('truckers/incrementTruckerInventory', {id: bookedTrucker.id}, {root: true})
                state.items.splice(index,1)
            }

    }
}