<template>
  <div class="word-letter">
      <input 
        class="word-letter__input"
        v-model="inputVal"  maxlength="1"  @input="onInputChange"/> {{this.letter.discovered}} {{inputVal}}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  ...mapActions['setLetter'],
  name: 'WordLetter',
   data(){
    return {
     //inputVal:  this.letter.discovered ? this.letter.letter : '',
     discovered: this.letter.discovered,
    }
  },
  props: {
    letter: Object
  },
  computed : {
     inputVal: {
       
     get: function () {
      const v = this.letter.discovered ? this.letter.letter : '';
      console.log('getttttttttttttttttttt');
      console.log(v);
      return v;
    },
    // setter
      set: function (newValue) {
        this.letter.discovered ? this.letter.letter : '';
        
      }
   }
  },
  methods: {
    onInputChange(event) {
      console.log(event.data);
      this.$store.dispatch('setLetter',  { index: this.letter.index, newValue: event.data} );
      
      //this.letter = Object.assign({},this.letter);
    }
  },
   watch: {
    'this.letter.discovered': function (newValue, oldValue) {
      console.log('kokaina');
      console.log(this.letter);
      console.log(newValue);
      this.inputVal = this.letter.discovered ? this.letter.letter : '';
    }
   }
}
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/base";

.word-letter {
  &__input {
    border: 0;
    height: 8.6rem;
    width: 6.6rem;
    border-radius: 1rem;
    background-color: $color-background-color-secondary;
    color:$color-text-color-secondary;
    font-weight: bold;
    padding: 2rem;
    font-size: 8rem;
    &:focus {
      background-color:$color-text-color-secondary;
      color:white;
      outline: none;
    }
      
  }
}
</style>
