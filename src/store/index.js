import Vue from 'vue'
import Vuex from 'vuex'
import bookedList from './bookingtruckermodules/bookedList'
import truckers from './bookingtruckermodules/truckers'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        bookedList,
        truckers
    }
})