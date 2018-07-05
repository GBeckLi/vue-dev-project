import Vue from 'vue';
import Router from 'vue-router';

import ROUTES from './../routes';
import { beforeEachInterceptor } from '../config/interceptors/router';

Vue.use(Router);

const router: Router = new Router({
  mode: 'hash',
  routes:[
    {
      path: '/',
      redirect: '/main'
    },
    ...ROUTES
  ]
});

router.beforeEach(beforeEachInterceptor);

export default router;