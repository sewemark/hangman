<template>
  <div id="app">
    <HangMan />
    <MatchedWords />
    <MissedWords />
  </div>
</template>

<script>
import HangMan from './components/HangMan.vue';
import MissedWords from './components/MissedWords';
import MatchedWords from './components/MatchedWord';
import { FETCH_NEW_WORD } from './store/actions.type';

export default {
  name: 'app',
  components: {
    HangMan,
    MatchedWords,
    MissedWords
  },
  created() {
    this.$store.dispatch(FETCH_NEW_WORD)
  },
}
</script>

<style lang="scss">

@import "scss/variables";
@import "scss/base";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:80%;
  margin:0 auto;
  margin-top:10rem;
  background-color:$color-game-background-color;
  display:flex;
  flex-wrap: wrap;
}

</style>
