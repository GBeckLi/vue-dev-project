import { MutationTree, GetterTree, ActionTree, StoreOptions } from 'vuex';

interface State {
  count: number;
  data: Array<any>
}

const state: State = {
  count: 0,
  data: []
};

const mutations: MutationTree<any> = {
  countChange(state, val = 0):void {
    state.count += val;
    console.log(state.count);
  }
};

const getters = {
  dataReverse(state): Array<any> {
    return state.data.reverse();
  }
};

export default {
 namespaced: true,
 state,
 mutations,
 getters
}