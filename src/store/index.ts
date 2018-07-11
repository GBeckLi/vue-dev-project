import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

import list from './list';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  modules: {
    list,
  }
});

export default store;