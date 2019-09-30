  <template>
  <div id="app">
    <popup-dialog v-if="gameState === 2" />
    <win-popup-dialog v-if="gameState === 0" />
    <div class="container">
      <hangman class="hangman" />
      <missed-letters class="matched-words" />
      <matched-letters class="missed-words" />
    </div>
  </div>
</template>
  <script>
import Hangnan from "./components/Hangman.vue";
import MissedLetters from "./components/MissedLetters";
import MatchedLetters from "./components/MatchedLetters";
import PopupDialog from "./components/PopupDialog";
import WinPopupDialog from "./components/WinPopupDialog";

import { FETCH_NEW_WORD } from "./store/actions.type";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Hangnan,
    MissedLetters,
    MatchedLetters,
    PopupDialog,
    WinPopupDialog
  },
  computed: {
    ...mapGetters(["gameState"])
  },
  created() {
    this.$store.dispatch(FETCH_NEW_WORD);
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
</style>
