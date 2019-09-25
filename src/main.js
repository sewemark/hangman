import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/index';
import ApiService from './common/api.service';

Vue.config.productionTip = false
Vue.use(Vuex)
ApiService.init();

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
