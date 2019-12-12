<template>
  <div class="popup-dialog">
    <div class="popup-dialog__content">
      <div class="popup-dialog__content--title">You won</div>
      <button class="popup-dialog__content--button" @click="newGame">New Game</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { SET_NEW_GAME } from "../store/actions.type";

export default {
  name: "WinPopupDialog",
  methods: {
    ...mapActions([SET_NEW_GAME])
  },
  methods: {
    newGame() {
      this.$store.dispatch(SET_NEW_GAME);
    }
  }
};
</script>