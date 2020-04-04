
const state = {
  valueAdd: {
    visible: false,
  },
};

const mutations = {
  toggleModal() {
    state.valueAdd.visible = !state.valueAdd.visible;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
