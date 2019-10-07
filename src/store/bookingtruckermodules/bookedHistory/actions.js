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

    addfinishBookingToOders ({ state, commit}, bookedList) {
        commit('pushBookedListToOders', { id: trucker.id})
        }
}