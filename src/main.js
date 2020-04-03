import Vue from 'vue';
import VSwitch from 'v-switch-case';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VSwitch);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
