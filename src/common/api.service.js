import { ApiRoutes } from "@/common/config";
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import { GetWordError } from "../errors/GetWordError";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    this.$log = Vue.$log;
  },

  async get(resource) {
    return Vue.axios.get(resource).catch(error => {
      console.log(this);
      this.$log.error(`Cannot get word from ${resource}`, error);
      throw new GetWordError(`Cannot get word from ${resource}`);
    });
  }
};

export default ApiService;

export const WordsService = {
  init() {
    this.responseParser = Vue.prototype.$responseParser;
  },

  async get() {
    const response = await ApiService.get(ApiRoutes.Nodes.GetOneRandomWord);
    return this.responseParser.parseNextWordResponse(response);
  },

  async getDefinitions(word) {
    const response = await ApiService.get(
      ApiRoutes.Nodes.WordDefinitionBase.toString().replace("XXX", word)
    );
    return this.responseParser.parseWordDefinitionResponse(response);
  }
};
