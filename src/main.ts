import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios, { AxiosAdapter } from 'axios'
import VueAxios from 'vue-axios'
import { cacheAdapterEnhancer } from 'axios-extensions';
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

Vue.use(VueAxios, axios.create({
  adapter: cacheAdapterEnhancer(axios.defaults.adapter as AxiosAdapter)
}));

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
