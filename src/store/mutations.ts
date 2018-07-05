import { MutationTree } from 'vuex';
const mutations: MutationTree<any> = {
  setActionMenu(state, index: string) {
    state.actionMenu = index;
    console.log(state);
    
  }
};

export default mutations;