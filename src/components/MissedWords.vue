<template>
    <div class="missed-words">
       <div class="missed-words__item" v-for="l in letters" v-bind:key="l.id">
          <word-letter :letter="l" />
         </div>
    </div>
</template>

<script>
import WordLetter from './WordLetter';
import { mapGetters } from "vuex";

export default {
  name: 'MissedWords',
  components: {
    WordLetter
  },
  computed: {
    ...mapGetters(['letters']),
  },
  data:()=> {
    return {
    }
  }
}
</script>

<style lang="scss">

@import "../scss/variables";
@import "../scss/base";

.missed-words {
  background-color:green;
  flex: 0 0 100%;
 
  &__item {
    margin-left:1rem;
    display: inline-block;
    
 }
}
</style>
