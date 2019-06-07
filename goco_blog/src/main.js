import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.min.css'


import Vssue from 'vssue';
import GithubV3 from '@vssue/api-github-v3';
import 'vssue/dist/vssue.css';


Vue.use(Vssue, {
  api: GithubV3,
  // 在这里设置你使用的平台的 OAuth App 配置
  owner: 'VinceMar',
  repo: 'vue-GoCo',
  clientId: '46bfb1e75cc6d7ce0eae',
  clientSecret: '9239f889e2cc0bbcc19933edd1c560f55bdc8809', // 只有在使用某些平台时需要
});

Vue.use(VueAxios,axios)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
