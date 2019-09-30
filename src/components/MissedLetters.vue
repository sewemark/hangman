<template>
  <div class="missed-letters">
    <div class="missed-letters__primary-header">You missed</div>
    <div class="missed-letters__secondary-header">{{missedLettersForamtted}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MissedLetters",
  computed: {
    ...mapGetters(["missedLetters"]),
    missedLettersForamtted: function() {
      return this.missedLetters.reduce((prev, curr) => prev + " " + curr, "");
    }
  }
};
</script>
