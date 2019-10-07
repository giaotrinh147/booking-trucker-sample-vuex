export const getters = {
    bookedTruckers: (state, getters, rootState) => {
        return state.items.map(({id, quantity}) => {
            const trucker = rootState.truckers.all.find(trucker => trucker.id === id)
            return {
                id: trucker.id,
                title: trucker.title,
                price: trucker.price,
                quantity
            }
        })
    },

    bookedTotalPrice: (state, getters) => {
        return getters.bookedTruckers.reduce((total, trucker) => {
            return total + trucker.price * trucker.quantity
        }, 0)
    }
}