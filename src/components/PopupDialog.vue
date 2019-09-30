<template>
  <div class="popup-dialog">
    <div class="popup-dialog__content">
      <div class="popup-dialog__content--title">Game over</div>
      <button class="popup-dialog__content--button" @click="setNewGame">New Game</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { SET_NEW_GAME } from '../store/actions.type';


export default {
  name: "PopupDialog",
  methods: {
    ...mapActions([SET_NEW_GAME])
  }
};
</script>
