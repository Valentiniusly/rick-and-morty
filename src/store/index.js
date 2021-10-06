import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: () => ({
    characters: [],
    character: {},
    pages: {
      next: null,
      prev: null,
    },
    loading: false,
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
    setLoading(state, status) {
      state.loading = status;
    },
    setCharacter(state, character) {
      state.character = character;
    },
  },
  actions: {
    async loadCharacters({ state, commit }) {
      if (!state.characters.length) {
        commit('setLoading', true);
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
        commit('setLoading', false);
      }
    },
    async loadMoreCharacters({ state, commit }) {
      if (state.pages.next) {
        commit('setLoading', true);
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
        commit('setLoading', false);
      }
    },
    async loadCharacter({ commit }, id) {
      commit('setLoading', true);
      try {
        const data = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        commit('setCharacter', data.data);
      } catch (err) {
        console.log(err);
      }
      commit('setLoading', false);
    },
  },
  getters: {
    characters(state) {
      return state.characters;
    },
    loading(state) {
      return state.loading;
    },
    character(state) {
      return state.character;
    },
  },
  modules: {},
});
