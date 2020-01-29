<template>
  <div class="popup-dialog">
    <div class="popup-dialog__content">
      <slot name="title">
        <div class="popup-dialog__content--title">You won</div>
      </slot>
      <button class="popup-dialog__content--button" @click="newGame">New Game</button>
    </div>
  </div>
</template>
<script>

import { SET_NEW_GAME } from "../store/actions.type";

export default {
  name: "PopupDialog",
  methods: {
    newGame() {
      this.$store.dispatch(SET_NEW_GAME, this);
    }
  }
};
</script>