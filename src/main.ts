import Vue from 'vue';
import App from './App.vue';
import ElementUi from 'element-ui';
// import { Button, Container } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/common.less';

import router from './plugins/router';
import store from './store';

Vue.use(ElementUi);

const div = document.createElement('div');
document.body.appendChild(div);

const app = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(div);