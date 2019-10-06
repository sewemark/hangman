import Vue from "vue";
import Vuex from "vuex";

import game from "./game.module";
import ui from './ui.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game,
    ui: {
      namespaced: false,
      ...ui
    }
  }
});