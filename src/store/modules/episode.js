import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    episode: {},
    chars: [],
  }),
  mutations: {
    setEpisode(state, episode) {
      state.episode = episode;
    },
    setChars(state, chars) {
      state.chars = chars;
    },
  },
  actions: {
    async loadEpisode({ commit }, id) {
      commit('setLoading', true, { root: true });
      try {
        // load episode data
        const { data: episode } = await axios.get(
          // eslint-disable-next-line prettier/prettier
          `https://rickandmortyapi.com/api/episode/${id}`
        );
        commit('setEpisode', episode);

        // load characters in episode
        const ids = episode.characters
          .reduce((str, link) => {
            const lastSlash = link.lastIndexOf('/');
            const id = link.substring(lastSlash + 1);
            return str + id + ',';
          }, '')
          .slice(0, -1);

        const { data: chars } = await axios.get(
          // eslint-disable-next-line prettier/prettier
          `https://rickandmortyapi.com/api/character/${ids}`
        );
        commit('setChars', chars);

        commit('setLoading', false, { root: true });
      } catch (err) {
        commit('setLoading', false, { root: true });
        console.log(err);
      }
    },
  },
  getters: {
    episode(state) {
      return state.episode;
    },
    chars(state) {
      return state.chars;
    },
  },
};
