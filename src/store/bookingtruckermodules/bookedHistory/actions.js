import truckersList from '../../../api/truckers'

export const actions = {
    addfinishBookingToOders ({ state, commit}, bookedList) {
        commit('pushBookedListToOders', { id: trucker.id})
        }
}