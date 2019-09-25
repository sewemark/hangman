<template>
  <div class="popup-dialog">
    <div class="popup-dialog__content">
      <div class="popup-dialog__content--title">Game over</div>
      <button class="popup-dialog__content--button" @click="setNewGame">New Game</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  
  name: "PopupDialog",
  methods:{
    ...mapActions(['setNewGame']),
  }
};
</script>

<style  lang="scss">
@import "../scss/_variables";

.popup-dialog {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(#000, 0.8);
  z-index: 9999;

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 75%;
    height: 400px;
    background-color: white;
    box-shadow: 0 1.5rem 3rem rgba(#000, 0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &--title {
      color: $color-text-color-primary;
      font-size: 39pt;
      font-weight: bold;
      text-align: center;
    }

    &--button {
        text-transform: uppercase;
        text-decoration: none;
        padding: 15px 40px;
        display: inline-block;
        border-radius: 10px;
        background-color: $color-text-color-primary;
        font-size:20t;
        font-weight: bold;
        color: $color-background-color-secondary;
        border-color: $color-text-color-primary;
     
    }
  }
}
</style>
