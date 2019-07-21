import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    totalTime: 0,
    list: []
};

export default new Vuex.Store({
    state
})