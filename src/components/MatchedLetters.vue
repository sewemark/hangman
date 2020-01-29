<template>
  <div class="matched-letters">
    <div
      v-for="letterObject in letters"
      :key="letterObject.id"
      class="matched-letters__item"
    >
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
