import { createStore } from 'vuex';
import character from './modules/character';
import episode from './modules/episode';

export default createStore({
  state: () => ({
    loading: false,
  }),
  mutations: {
    setLoading(state, status) {
      state.loading = status;
    },
  },
  actions: {},
  getters: {
    loading(state) {
      return state.loading;
    },
  },
  modules: {
    character,
    episode,
  },
});
