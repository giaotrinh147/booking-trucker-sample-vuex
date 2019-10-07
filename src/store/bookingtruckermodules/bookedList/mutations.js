import truckersList from '../../../api/truckers'

export const mutations = {
    pushTruckerToBookedList (state, {id}) {
        state.items.push({
            id,
            quantity: 1
        })
    },

    incrementTruckerQuantity (state, { id }) {
        const bookedTrucker = state.items.find(trucker => trucker.id === id)
        bookedTrucker.quantity++
    },

    decrementTruckerQuantity (state, {id}) {
        const bookedTrucker = state.items.find(trucker => trucker.id === id)
        bookedTrucker.quantity--
    },

    setBookedTruckers (state, { items }) {
        state.items = items
    },

    setFinishBookingStatus (state, status) {
        state.bookedStatus = status
        var orderNumber = Math.floor( Math.random() * 90000 ) + 10000
        if(state.bookedStatus == 'successful'){
            truckersList.setBookedHistory
        }
    }
}