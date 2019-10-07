import truckersList from '../../../api/truckers'

export const actions = {
    getAllTruckers ({ commit }) {
        truckersList.getTruckers(truckers => {
            commit('setTruckers', truckers)
        })
    }
}