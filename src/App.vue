<template>
    <div id="app" class="container">
      <HangMan class="hangman" />
      <MatchedWords class="matched-words" />
      <MissedWords class="missed-words" />
      
    </div>
</template>

<script>
import HangMan from "./components/HangMan.vue";
import MissedWords from "./components/MissedWords";
import MatchedWords from "./components/MatchedWord";
import { FETCH_NEW_WORD } from "./store/actions.type";

export default {
  name: "app",
  components: {
    HangMan,
    MatchedWords,
    MissedWords
  },
  created() {
    this.$store.dispatch(FETCH_NEW_WORD);
  }
};
</script>

<style lang="scss">
@import "scss/variables";
@import "scss/base";

// #app {

//   width: 80%;
//   margin: 0 auto;
//   margin-top: 10rem;
  
//   display: flex;
//   flex-wrap: wrap;
// }
.container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $color-game-background-color;
  width: 80%;
  height: 80vh;
  transform: translateX(10%) translateY(10%);
  border: 4px solid #ccc;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  
}

.container::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  border-style: solid;
}

.container::after {
  border-radius: 0em;
  border-width: 25em;
  border-color:transparent;
  border-right-color: $color-text-color-primary;
  border-bottom-color: $color-text-color-primary;
  z-index: -1;
}

.hangman {
  flex: 50%;
  height: 80%;
  background-color: tomato;
}

.missed-words {
   flex: 1 0 0;
  height: 20%;
    flex-grow: 1;
  background-color: teal;
}

.matched-words {
  flex: 50%;
  height: 80%;
  background-color:transparent;
}
</style>
