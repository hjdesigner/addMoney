import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loader: true,
    error: false,
    clients: [],
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
    getClients(state) {
      axios.get('https://dummy.restapiexample.com/api/v1/employees')
        .then((result) => {
          state.clients = result.data;
          state.loader = false;
        })
        .catch(() => {
          state.loader = false;
          state.error = true;
        });
    },
    addMoney(state, payload) {
      state.clients.data = state.clients.data.map((item) => {
        if (item.id === payload.employee) {
          if (item.money) {
            return {
              ...item,
              money: item.money + payload.value,
            };
          }
          return {
            ...item,
            money: payload.value,
          };
        }
        return item;
      });
      state.modal = { visible: false, name: '', id: 0 };
    },
  },
  actions: {
  },
  modules: {
  },
});
