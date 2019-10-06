<template>
  <div class="matched-letters">
    <div class="matched-letters__item" v-for="letterObject in letters" v-bind:key="letterObject.id">
      <word-letter :letter="letterObject" />
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
