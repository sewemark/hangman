<template>
  <div class="matched-letters">
    <div class="matched-letters__item" v-for="l in letters" v-bind:key="l.id">
      <word-letter :letter="l" />
    </div>
  </div>
</template>

<script>
import WordLetter from "./WordLetter";
import { mapGetters } from "vuex";

export default {
  name: "MatchedLetters",
  components: {
    WordLetter
  },
  computed: {
    ...mapGetters(["letters"])
  }
};
</script>
