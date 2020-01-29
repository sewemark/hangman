<template>
  <div id="app">
    <popup-dialog v-if="gameState === GAME_STATES.GameOver">
      <template #title>
        <div class="popup-dialog__content--title">
          Game over, word: <span class="popup-dialog__content--title-akcent">{{ word }}</span>
        </div>
      </template>
    </popup-dialog>
    <popup-dialog v-if="gameState === GAME_STATES.Win">
      <template #title>
        <div class="popup-dialog__content--title">
          You won, grats!!!
        </div>
      </template>
    </popup-dialog>
    <loader v-if="isLoading" />
    <snackbar />
    <div class="container">
      <hangman class="hangman" />
      <missed-letters />
      <matched-letters />
    </div>
  </div>
</template>
  <script>
import Hangman from "./components/Hangman.vue";
import MissedLetters from "./components/MissedLetters";
import MatchedLetters from "./components/MatchedLetters";
import PopupDialog from "./components/PopupDialog";
import Snackbar from "./components/Snackbar";
import Loader from "./components/Loader";

import { GAME_STATES } from "./store/game.module";
import { FETCH_NEW_WORD } from "./store/actions.type";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Hangman,
    MissedLetters,
    MatchedLetters,
    PopupDialog,
    Snackbar,
    Loader
  },
  data: function() {
    return {
      GAME_STATES
    };
  },
  computed: {
    ...mapGetters(["gameState", "isLoading", "word"])
  },
  created() {
    this.$store.dispatch(FETCH_NEW_WORD, this);
  }
};
</script>

<style lang="scss">
@import "scss/base/variables";
@import "scss/base/base";
@import "scss/layout/container.scss";
@import "scss/components/hangman.scss";
@import "scss/components/missed-letters.scss";
@import "scss/components/matched-letters.scss";
@import "scss/components/popup-dialog.scss";
@import "scss/components/word-letter.scss";
@import "scss/components/snack-bar.scss";
@import "scss/components/word-definitions.scss";
@import "scss/components/loader.scss";
</style>
