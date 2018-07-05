import Vue from 'vue';
import store from './../../store';
export function beforeEachInterceptor(to, from, next) {
  const isFromMatched = from.matched && from.matched.length > 0;
  const isToMatched = to.matched && to.matched.length > 0;
  
  store.commit('setActionMenu', '2-1')

  if (!isFromMatched && !isToMatched) {
    return next('/');
  }

  if (!isToMatched && isFromMatched) {
    return next(false);
  }

  next();
}
