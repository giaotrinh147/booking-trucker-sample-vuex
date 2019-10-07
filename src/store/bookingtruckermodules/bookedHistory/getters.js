export const getters = {
    Oders: (state, getters, rootState, rootMutation) => {
        return state.items.map(({id, truckerId, quantity}) => {
            const bookedtrucker = rootState.truckers.all.find(trucker => trucker.id === truckerId)
            return {
                ordersId: id,
                title: bookedtrucker.title,
                price: bookedtrucker.price,
                quantity
            }
        })
    },

    OderTotalPrice: (state, getters) => {
        return getters.Oders.reduce((total, bookedtrucker) => {
            return total + bookedtrucker.price * bookedtrucker.quantity
        }, 0)
    }
}