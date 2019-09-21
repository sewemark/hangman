<template>
    <div class="matched-word">
        <div class="matched-word__primary-header">
          You missed
        </div>
        <div class="matched-word__secondary-header">
          A E D
        </div>
    </div>
</template>

<script>
export default {
  name: 'MatchedWord',
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
