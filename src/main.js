import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/index';
import ApiService from './common/api.service';
import VueLogger from 'vuejs-logger';
import ResponseParser from './services/responseParser.service';
import { WordsService } from './common/api.service';
const isProduction = process.env.NODE_ENV === 'production';

initLogger();
injectDependencies()
Vue.use(Vuex)
initDependencies();

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

function initLogger() {
  const options = {
    isEnabled: true,
    logLevel: isProduction ? 'error' : 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true
  };
  Vue.use(VueLogger, options);
  Vue.config.productionTip = false
}


function initDependencies() {
  ApiService.init();
  WordsService.init();
}

function injectDependencies() {
  const responseParser = ResponseParser;
  responseParser.init();
  Vue.prototype.$responseParser = responseParser;
}