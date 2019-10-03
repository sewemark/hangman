import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { ApiRoutes } from "@/common/config";
import ResponseParser from '../services/responseParser.service';

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
  },

  async get(resource) {
    return Vue.axios.get(resource).catch((error) => {
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
