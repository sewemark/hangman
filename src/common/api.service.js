import { ApiRoutes } from "@/common/config";
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import { GetWordError } from '../errors/GetWordError';
import ResponseParser from '../services/responseParser.service';

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    this.$log = Vue.$log;
  },

  async get(resource) {
    return Vue.axios.get(resource).catch((error) => {
      this.$log.error(`Cannot get word from ${resource}`, error);
      throw new GetWordError(`Cannot get word from ${resource}`);
    });
  },
};

export default ApiService;

export const WordsService = {
  async get() {
    const response = await ApiService.get(ApiRoutes.Nodes.GetOneRandomWord);
    return ResponseParser.parseNextWordResponse(response);
  }
};
