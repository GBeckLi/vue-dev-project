import { ActionTree } from 'vuex';

const actions: ActionTree<any, any> = {
  setActiveMenu({ commit, state }, index: string): void {
    state.actionMenu = index;
  }
};

export default actions;