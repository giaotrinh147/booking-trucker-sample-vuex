export const mutations = {
    pushBookedListToOders (state, {id}) {
        state.historyItems.push({
            id,
            bookedTruckers,
            totalPrice
        })
    }
}