<template>
  <div class="missed-letters">
    <div class="missed-letters__primary-header" v-if="missedLettersForamtted.length >0 ">You missed</div>
    <div class="missed-letters__secondary-header">{{missedLettersForamtted}}</div>
    <word-definitions />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WordDefinitions from './WordDefinitions';

export default {
  name: "MissedLetters",
  components:{
    WordDefinitions,
  },
  computed: {
    ...mapGetters(["missedLetters"]),
    missedLettersForamtted: function() {
      return this.missedLetters.reduce((prev, curr) => prev + " " + curr, "");
    }
  }
};
</script>
