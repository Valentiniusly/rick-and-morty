import { createStore } from 'vuex';
import character from './modules/character';
import episode from './modules/episode';
import VuexPersistence from 'vuex-persist';

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
  plugins: [
    new VuexPersistence({
      storage: window.sessionStorage,
    }).plugin,
  ],
});
