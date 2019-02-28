import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isMobile: false,
  closeNavBar: false
};

const mutations = {};

Object.keys(state).forEach(k => {
  mutations[k] = (state, data) => state[k] = data;
});

export default new Vuex.Store({
  state,
  mutations
});
