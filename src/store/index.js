import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: () => ({
    characters: [],
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
  },
  actions: {
    async loadCharacters({ state, commit }) {
      if (!state.characters.length) {
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
        } catch (err) {
          console.log(err);
        }
      }
    },
    async loadMoreCharacters({ state, commit }) {
      try {
        const data = await axios.get(state.pages.next);
        commit('setPages', {
          next: data.data.info.next,
          prev: data.data.info.prev,
        });
        commit('addCharacters', data.data.results);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    characters(state) {
      return state.characters;
    },
  },
  modules: {},
});
