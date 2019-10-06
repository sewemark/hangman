import { WordsService } from "@/common/api.service";
import { FETCH_NEW_WORD, SET_ERROR_SNACKBAR, SET_LETTER, SET_NEW_GAME } from "./actions.type";
import { HIDE_ERROR_SNACKBARD, INCRESE_EFFORT_COUNT, NEW_GAME, SET_LETTER_DISCOVERED, SET_LETTER_UNDISCOVERED, SET_MISSED_LETTER, SET_NEW_WORD } from './mutations.type';

const GET_NEW_WORD_INTERVAL = 5000;
const MAX_EFFOR_COUNT = 11;

const GAME_STATES = Object.freeze({
  NewGame: 1,
  GameOver: 2,
  Win: 3,
});

const initialGameStateFactory = () => ({
  gameState: GAME_STATES.NewGame,
  word: '',
  guessCount: 0,
  letters: [],
  missedLetters: [],
  effortCount: 0
});

const initialState = {
  ...initialGameStateFactory(),
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
        context.dispatch(`${SET_ERROR_SNACKBAR}`, `Cannot get next word, retry in ${GET_NEW_WORD_INTERVAL / 1000.0}s...`);
        setTimeout(() => {
          context.dispatch(HIDE_ERROR_SNACKBARD);
          context.dispatch(FETCH_NEW_WORD, vm)
        }, GET_NEW_WORD_INTERVAL)
      });
  },

  [SET_LETTER]({ commit }, payload) {
    if (state.word[payload.index].toLowerCase() === payload.newValue.toLowerCase()) {
      commit(SET_LETTER_DISCOVERED, payload.index, payload.newValue);
    } else {
      commit(SET_LETTER_UNDISCOVERED, payload.index);
      commit(SET_MISSED_LETTER, payload.newValue);
      commit(INCRESE_EFFORT_COUNT);
    }
  },

  [SET_NEW_GAME]({ commit, dispatch }) {
    commit(NEW_GAME, dispatch);
    dispatch(FETCH_NEW_WORD);
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

  [SET_LETTER_DISCOVERED](state, index, discoveredValue) {
    state.letters[index].discovered = true;
    state.letters.forEach(letter => {
      if (letter.letter.toLowerCase() === discoveredValue.toLowerCase()) {
        letter.discovered = true;
      }
    });
    if (state.letters.filter((letter) => !letter.discovered).length <= 0) {
      state.gameState = GAME_STATES.GameOver;
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
    if (state.effortCount >= MAX_EFFOR_COUNT) {
      state.gameState = GAME_STATES.GameOver;
    }
  },

  [NEW_GAME](state) {
    state = Object.assign(state, initialGameStateFactory())
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
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};