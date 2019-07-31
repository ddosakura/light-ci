import Vue from "vue";
import Vuex from "vuex";
import { save, load } from "utils/storge";

Vue.use(Vuex);

// === cache key ===
const CACHE_LIGHT_CI_TOKEN = "CACHE_LIGHT_CI_TOKEN";

// === mutations ===
const UPDATE_TOKEN = "UPDATE_TOKEN";

const store = new Vuex.Store({
  state: {
    token: ""
  },
  getters: {
    token: state => {
      return state.token;
    }
  },
  mutations: {
    [UPDATE_TOKEN](state, token) {
      state.token = token;
    }
  },
  actions: {
    updateToken({ commit }, { token }) {
      save(CACHE_LIGHT_CI_TOKEN, token);
      commit(UPDATE_TOKEN, token);
    }
  }
});

setTimeout(() => {
  const token = load(CACHE_LIGHT_CI_TOKEN);
  if (token) {
    store.commit(UPDATE_TOKEN, token);
  }
}, 0);

export default store;
