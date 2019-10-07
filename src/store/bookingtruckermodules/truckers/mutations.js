export const mutations = {
    setTruckers (state, truckers) {
        state.all = truckers
    },

    decrementTruckerInventory (state, { id }) {
        const trucker =state.all.find(trucker => trucker.id === id)
        trucker.inventory--
    }
}