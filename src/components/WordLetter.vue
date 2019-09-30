<template>
  <div class="word-letter">
    <input class="word-letter__input" v-model="inputVal" maxlength="1" @input="onInputChange" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { SET_LETTER } from '../store/actions.type';
export default {
  ...mapActions["setLetter"],
  name: "WordLetter",
  data() {
    return {
      discovered: this.letter.discovered
    };
  },
  props: {
    letter: Object
  },
  computed: {
    inputVal: {
      get: function() {
        return this.letter.discovered ? this.letter.letter : "";
      },
      set: function(newValue) {
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
  },
  watch: {
    "this.letter.discovered": function(newValue, oldValue) {
      this.inputVal = this.letter.discovered ? this.letter.letter : "";
    }
  }
};
</script>
