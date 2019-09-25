<template>
    <div class="matched-word">
        <div class="matched-word__primary-header">
          You missed
        </div>
        <div class="matched-word__secondary-header">
          {{missedLettersForamtted}}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'MatchedWord',
  computed: {
    ...mapGetters(['missedLetters']),
    missedLettersForamtted: function() {
      return this.missedLetters.reduce((prev, curr)=> prev + ' ' +  curr, '');
    }
  }
}
</script>


<style lang="scss">

@import "../scss/variables";
@import "../scss/base";

.matched-word {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  margin-left:15rem;
  &__primary-header {
    color: $color-text-color-secondary;
    font-size:4rem;
    font-weight: bold;
  }
  
  &__secondary-header {
    color: $color-text-color-primary;
    font-size:6rem;
    font-weight: bold;
  }
}
</style>
