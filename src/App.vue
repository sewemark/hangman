  <template>
  <div id="app">
    <popup-dialog v-if="gameState === 2" />
    <win-popup-dialog v-if="gameState === 0" />
    <snackbar />
    <div class="container">
      <Hangman class="hangman" />
      <missed-letters class="matched-words" />
      <matched-letters class="missed-words" />
    </div>
  </div>
</template>
  <script>
import Hangman from "./components/Hangman.vue";
import MissedLetters from "./components/MissedLetters";
import MatchedLetters from "./components/MatchedLetters";
import PopupDialog from "./components/PopupDialog";
import WinPopupDialog from "./components/WinPopupDialog";
import Snackbar from "./components/Snackbar";

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
    Snackbar
  },
  computed: {
    ...mapGetters(["gameState"])
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
</style>
