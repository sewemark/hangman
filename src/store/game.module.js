import { WordsService } from "@/common/api.service";
import { FETCH_NEW_WORD } from "./actions.type";
import { SET_NEW_WORD } from './mutations.type';
import { stat } from "fs";
import Vue from 'vue';

const initialState = {
  gameState: undefined,
  word: '',
  guessCount: 0,
  letters: [],
};

export const state = { ...initialState };

const actions = {
  [FETCH_NEW_WORD]({ commit }) {
    return WordsService.get()
      .then(( newWord ) => {
        commit(SET_NEW_WORD, newWord);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  setLetter({commit}, payload) {
    if(state.word[payload.index].toLowerCase() === payload.newValue.toLowerCase())  {
      console.log('Jet git no i git zarobiny bedzie hajs ******')
      commit('setLetterDiscovered', payload.index);
    } else {
      commit('setLetterUndiscovered', payload.index);
    }
  }
};

const mutations = {
  [SET_NEW_WORD](state, newWord) {
    state.word = newWord;
    state.letters = [];
    newWord.split('').forEach((l, index)=>{
     state.letters.push({
       letter: l,
       discovered: false,
       index,
     })
    });
  },
  setLetterDiscovered(state, index) {
    
    state.letters[index].discovered = true;
    const discoveredValue = state.letters[index].letter;
    state.letters.forEach(letter => {
      if(letter.letter.toLowerCase() === discoveredValue.toLowerCase()) {

        letter.discovered = true;
      }
      letter = Object.assign({}, letter);
    });
    state.letters = [...state.letters];
    Vue.set(state, 'letters', [...state.letters]);
  },

  setLetterUndiscovered(state, index) {
    const letter = state.letters[index];
    const c = Object.assign({} , letter)
    state.letters.splice(index, 1, c)
  }
};

const getters = {
  gameState(state) {
    return state.gameState;
  },
  
  word(state) {
    return state.word;
  },

  letters(state) {
    return state.letters;
  },

  guessCount(state) {
    return state.guessCount;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};