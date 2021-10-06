import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    characters: [],
    character: {},
    pages: {
      next: null,
      prev: null,
    },
  }),
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
    addCharacters(state, characters) {
      state.characters = state.characters.concat(characters);
    },
    setPages(state, { next, prev }) {
      state.pages.next = next;
      state.pages.prev = prev;
    },
    setCharacter(state, character) {
      state.character = character;
    },
  },
  actions: {
    async loadCharacters({ state, commit }) {
      if (!state.characters.length) {
        commit('setLoading', true, { root: true });
        try {
          const data = await axios.get(
            // eslint-disable-next-line prettier/prettier
            'https://rickandmortyapi.com/api/character'
          );
          commit('setPages', {
            next: data.data.info.next,
            prev: data.data.info.prev,
          });
          commit('setCharacters', data.data.results);
          commit('setLoading', false, { root: true });
        } catch (err) {
          commit('setLoading', false, { root: true });
          console.log(err);
        }
      }
    },
    async loadMoreCharacters({ state, commit }) {
      if (state.pages.next) {
        commit('setLoading', true, { root: true });
        try {
          const data = await axios.get(state.pages.next);
          commit('setPages', {
            next: data.data.info.next,
            prev: data.data.info.prev,
          });
          commit('addCharacters', data.data.results);
          commit('setLoading', false, { root: true });
        } catch (err) {
          commit('setLoading', false, { root: true });
          console.log(err);
        }
      }
    },
    async loadCharacter({ commit }, id) {
      commit('setLoading', true, { root: true });
      try {
        const data = await axios.get(
          // eslint-disable-next-line prettier/prettier
          `https://rickandmortyapi.com/api/character/${id}`
        );
        commit('setCharacter', data.data);
        commit('setLoading', false, { root: true });
      } catch (err) {
        commit('setLoading', false, { root: true });
        console.log(err);
      }
    },
  },
  getters: {
    characters(state) {
      return state.characters;
    },
    character(state) {
      return state.character;
    },
  },
};
