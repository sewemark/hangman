<template>
  <div class="word-letter">
    <input
      v-model="inputVal"
      class="word-letter__input"
      :disabled="letter.discovered"
      maxlength="1"
      @input="onInputChange"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { SET_LETTER } from "../store/actions.type";
export default {
  ...mapActions["setLetter"],
  name: "WordLetter",
  props: {
    letter: Object
  },
  data() {
    return {
      discovered: this.letter.discovered
    };
  },
  computed: {
    inputVal: {
      get: function() {
        return this.letter.discovered ? this.letter.letter : "";
      },
      set: function() {
        this.letter.discovered ? this.letter.letter : "";
      }
    }
  },
  methods: {
    onInputChange(event) {
      this.$store.dispatch(SET_LETTER, {
        index: this.letter.index,
        newValue: event.data
      });
    }
  }
};
</script>
