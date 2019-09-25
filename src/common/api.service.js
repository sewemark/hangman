import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config";
const API_KEY = '5rcog5gvkgz8veyjdzre7r5u8j04z1a2iqw8rjadng8udnt8d';
const GET_RANDOM_WORD_URL = `words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=1&api_key=${API_KEY}`;
const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  get(resource) {
    return Vue.axios.get(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

export default ApiService;

export const WordsService = {
  async get() {
    try {
    const newWord = await ApiService.get(`${GET_RANDOM_WORD_URL}`);
    console.log(newWord);
    return newWord.data[0].word;
  }catch(err) {
    console.log(err);
  }
}
};