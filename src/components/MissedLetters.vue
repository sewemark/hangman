<template>
  <div class="missed-letters">
    <transition name="fade">
      <div
        v-if="missedLettersForamtted.length >0 "
        class="missed-letters__primary-header"
      >
        You missed
      </div>
    </transition>
    <div class="missed-letters__secondary-header">
      {{ missedLettersForamtted }}
    </div>
    <word-definitions />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WordDefinitions from "./WordDefinitions";

export default {
  name: "MissedLetters",
  components: {
    WordDefinitions
  },
  computed: {
    ...mapGetters(["missedLetters"]),
    missedLettersForamtted: function() {
      return this.missedLetters.reduce((prev, curr) => prev + " " + curr, "");
    }
  }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>