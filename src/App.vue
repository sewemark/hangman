  <template>
  <div id="app">
    <popup-dialog v-if="gameState === GAME_STATES.GameOver" />
    <win-popup-dialog v-if="gameState === GAME_STATES.Win" />
    <loader v-if="isLoading" />
    <snackbar />
    <div class="container">
      <hangman class="hangman" />
      <missed-letters class="matched-words" />
      <matched-letters class="missed-words" />
      <word-definitions />
    </div>
  </div>
</template>
  <script>
import Hangman from "./components/Hangman.vue";
import MissedLetters from "./components/MissedLetters";
import MatchedLetters from "./components/MatchedLetters";
import PopupDialog from "./components/PopupDialog";
import WinPopupDialog from "./components/WinPopupDialog";
import WordDefinitions from "./components/WordDefinitions";
import Snackbar from "./components/Snackbar";
import Loader from "./components/Loader";

import { GAME_STATES } from "./store/game.module";
import { FETCH_NEW_WORD } from "./store/actions.type";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Hangman,
    MissedLetters,
    MatchedLetters,
    PopupDialog,
    WinPopupDialog,
    Snackbar,
    WordDefinitions,
    Loader,
  },
  data: function() {
    return {
      GAME_STATES
    };
  },
  computed: {
    ...mapGetters(["gameState", "isLoading"])
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
