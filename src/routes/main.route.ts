import { RouteConfig } from 'vue-router';
import { AsyncComponent } from 'vue';

const mainComponent: AsyncComponent = (): any => import('./../views/main.vue');

const routes: RouteConfig[] = [
  {
    path: '/main',
    name: 'main',
    component: mainComponent
  }
]

export default routes;