import { WordsService } from "@/common/api.service";
import { FETCH_NEW_WORD, NEW_GAME } from "./actions.type";
import { SET_NEW_WORD } from './mutations.type';

const initialState = {
  gameState: 1,
  word: '',
  guessCount: 0,
  letters: [],
  missedLetters: [],
  effortCount: 0,
};

export const state = { ...initialState };

const actions = {
  [FETCH_NEW_WORD]({ commit }) {
    return WordsService.get()
      .then((newWord) => {
        console.log('New word new word');
        console.log(newWord);
        commit(SET_NEW_WORD, newWord);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  setLetter({ commit }, payload) {
    if (state.word[payload.index].toLowerCase() === payload.newValue.toLowerCase()) {
      commit('setLetterDiscovered', payload.index);

    } else {
      commit('setLetterUndiscovered', payload.index);
      commit('increseEffortCount');
      commit('setMissedLetter', payload.newValue);
    }
  },
  setNewGame({ commit, dispatch }) {
    commit('newGame');
    dispatch('fetch-new-word');
  }
};

const mutations = {
  [SET_NEW_WORD](state, newWord) {
    state.word = newWord;
    state.letters = [];
    newWord.split('').forEach((l, index) => {
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
      if (letter.letter.toLowerCase() === discoveredValue.toLowerCase()) {
        letter.discovered = true;
      }
    });
    if (state.letters.filter((letter) => !letter.discovered).length <= 0) {
      state.gameState = 0;
    }
  },

setLetterUndiscovered(state, index) {
  const letter = state.letters[index];
  const c = Object.assign({}, letter);
  state.letters.splice(index, 1, c);
},

setMissedLetter(state, missedLetter){
  state.missedLetters.push(missedLetter);
},

increseEffortCount(state) {
  state.effortCount++;
  if (state.effortCount >= state.letters.length) {
    state.gameState = 2;
  }
},
newGame(state) {
  //state =  Object.assign({}, state);
  state.gameState = 1;
  state.word = '';
  state.guessCount = 0;
  state.letters = [];
  state.missedLetters = [];
  state.effortCount = 0;
},
  
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

  missedLetters(state) {
    return state.missedLetters;
  },

  effortCount(state) {
    return state.effortCount;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};