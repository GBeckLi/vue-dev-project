import Vue from 'vue';
import App from './App.vue';
import ElementUi from 'element-ui';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import { Button, Container } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/common.less';

import router from './plugins/router';
import inject from './plugins/inject';
import store from './store';

Vue.use(ElementUi);
Vue.use(inject);
Vue.use(VueAxios, axios);

const div = document.createElement('div');
document.body.appendChild(div);

const app = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(div);

console.log(app);