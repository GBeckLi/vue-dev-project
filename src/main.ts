import Vue from 'vue';
import App from './App.vue';
import { Button, Dialog } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Button);
Vue.use(Dialog);

const div = document.createElement('div');
document.body.appendChild(div);

const app = new Vue({
  render: (h) => h(App)
}).$mount(div);