import { GetterTree } from 'vuex';

const getters: GetterTree<any, any> = {
  activeMenu(state): string {
    return state.activeMenu;
  }
};