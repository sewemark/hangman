import { WordsService } from "@/common/api.service";
import { FETCH_NEW_WORD, SET_LETTER, SET_NEW_GAME } from "./actions.type";
import {
  SET_NEW_WORD,
  SET_LETTER_DISCOVERED,
  NEW_GAME,
  INCRESE_EFFORT_COUNT,
  SET_MISSED_LETTER,
  SET_LETTER_UNDISCOVERED,
  SET_ERROR_SNACKBAR,
} from './mutations.type';

const GET_NEW_WORD_INTERVAL = 1000;
const GAME_STATES = Object.freeze({
  NewGame:1,
  GameOver:2,
  Win:3,
});

const initialState = {
  gameState: GAME_STATES.NewGame,
  word: '',
  guessCount: 0,
  letters: [],
  missedLetters: [],
  effortCount: 0,
  snackbar: {
    show: false,
    message: '',
  }
};

export const state = { ...initialState };

const actions = {
  [FETCH_NEW_WORD](context, vm) {
    return WordsService.get()
      .then((newWord) => {
        context.commit(SET_NEW_WORD, newWord);
      })
      .catch(error => {
        vm.$log.error(`Cannot fetch new word`, error);
        context.commit(SET_ERROR_SNACKBAR, `Cannot get next word, retry in ${GET_NEW_WORD_INTERVAL / 1000.0}s...`);
        setTimeout(() => {
          context.dispatch(FETCH_NEW_WORD, vm)
        }, GET_NEW_WORD_INTERVAL)
      });
  },

  [SET_LETTER]({ commit }, payload) {
    if (state.word[payload.index].toLowerCase() === payload.newValue.toLowerCase()) {
      commit(SET_LETTER_DISCOVERED, payload.index);
    } else {
      commit(SET_LETTER_UNDISCOVERED, payload.index);
      commit(INCRESE_EFFORT_COUNT);
      commit(SET_MISSED_LETTER, payload.newValue);
    }
  },

  [SET_NEW_GAME]({ commit, dispatch }) {
    commit(NEW_GAME);
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

  [SET_LETTER_DISCOVERED](state, index) {
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

  [SET_LETTER_UNDISCOVERED](state, index) {
    const letter = state.letters[index];
    const c = Object.assign({}, letter);
    state.letters.splice(index, 1, c);
  },

  [SET_MISSED_LETTER](state, missedLetter) {
    state.missedLetters.push(missedLetter);
  },

  [INCRESE_EFFORT_COUNT](state) {
    state.effortCount++;
    if (state.effortCount >= state.letters.length) {
      state.gameState = 2;
    }
  },

  [NEW_GAME](state) {
    state.gameState = 1;
    state.word = '';
    state.guessCount = 0;
    state.letters = [];
    state.missedLetters = [];
    state.effortCount = 0;
  },

  [SET_ERROR_SNACKBAR](state, message) {
    state.snackbar = {
      show: true,
      message,
    }
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

  missedLetters(state) {
    return state.missedLetters;
  },

  effortCount(state) {
    return state.effortCount;
  },

  snackbar(state) {
    return state.snackbar;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};