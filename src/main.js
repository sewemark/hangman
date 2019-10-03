import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/index';
import ApiService from './common/api.service';
import VueLogger from 'vuejs-logger';
const isProduction = process.env.NODE_ENV === 'production';
 
const options = {
    isEnabled: true,
    logLevel : isProduction ? 'error' : 'debug',
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : true,
    separator: '|',
    showConsoleColors: true
};
Vue.use(VueLogger, options); 
Vue.config.productionTip = false
Vue.use(Vuex)

ApiService.init();

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
