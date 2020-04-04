import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    statusModal: false,
    modal: {
      visible: false,
      name: '',
      id: 0,
    },
  },
  mutations: {
    openModal(state, payload) {
      state.modal = payload;
    },
    closeModal(state) {
      state.modal = { visible: false, name: '', id: 0 };
    },
  },
  actions: {
  },
  modules: {
  },
});
