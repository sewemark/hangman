<template>
  <div class="hangman">
    <popup-dialog  v-if="gameState === 2" />
    <win-popup-dialog  v-if="gameState === 0" />
    <figure v-if="effortCount>1" class="bar">
      <img src="../assets/imgs/bar.png" />
    </figure>
    <div class="hangman-container">
      <transition name="fade">
        <figure v-if="effortCount>1" class="head">
          <img src="../assets/imgs/head.png" />
        </figure>
      </transition>
      <transition name="fade">
        <figure v-if="effortCount>2" class="neck">
          <img src="../assets/imgs/neck.png" />
        </figure>
      </transition>
      <transition name="fade">
        <figure v-if="effortCount>3" class="corpus">
          <img src="../assets/imgs/corpus.png" />
        </figure>
      </transition>
      <transition name="fade">
        <figure v-if="effortCount>4" class="right-arm">
          <img src="../assets/imgs/right-arm.png" />
        </figure>
      </transition>
      <transition name="fade">
        <figure v-if="effortCount>5" class="right-hand">
          <img src="../assets/imgs/right-hand.png" />
        </figure>
      </transition>
      <transition name="fade">
        <figure v-if="effortCount>6" class="left-arm">
          <img src="../assets/imgs/left-arm.png" />
        </figure>
      </transition>
      <transition name="fade">
        <figure v-if="effortCount>7" class="left-hand">
          <img src="../assets/imgs/left-hand.png" />
        </figure>
      </transition>
      <transition name="fade">
        <figure v-if="effortCount>8" class="left-leg">
          <img src="../assets/imgs/left-leg.png" />
        </figure>
      </transition>
      <transition name="fade">
        <figure v-if="effortCount>9" class="right-leg">
          <img src="../assets/imgs/right-leg.png" />
        </figure>
      </transition>
      <transition name="fade">
        <figure v-if="effortCount>10" class="right-foot">
          <img src="../assets/imgs/right-foot.png" />
        </figure>
      </transition>
      <transition name="fade">
        <figure v-if="effortCount>11" class="left-foot">
          <img src="../assets/imgs/left-foot.png" />
        </figure>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import PopupDialog from './PopupDialog';
import WinPopupDialog from './WinPopupDialog';

export default {
  name: "HangMan",
  computed: {
    ...mapGetters(["effortCount", "gameState"])
  },
  components:{
    PopupDialog,
    WinPopupDialog,
  }
};
</script>

<style scoped lang="scss">
.hangman {
  background-color: red;
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;

  .bar {
    margin-left:0;
    padding-left:0;
    transform: scale(0.5, 0.5) translateX(-347px) translateY(30px);
  }

  .hangman-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 450px;
    transform: scale(0.5, 0.5) translateY(-250px) translateX(-170px);

    .head {
      z-index: 2;
    }

    .neck {
      transform: translateY(-30px);
      z-index: 1;
    }
    .corpus {
      transform: translateY(-50px);
      z-index: 1;
    }
    .right-arm {
      position: absolute;
      top: 241px;
      left: 110px;
      z-index: 2;
    }

    .right-hand {
      position: absolute;
      top: 341px;
      left: 210px;
      z-index: 1;
    }
    .left-hand {
      position: absolute;
      top: 341px;
      left: -48px;
      z-index: 1;
    }
    .left-arm {
      position: absolute;
      top: 241px;
      left: -40px;
      z-index: 2;
    }
    .left-leg {
      position: absolute;
      top: 385px;
      left: 10px;
      z-index: 2;
    }

    .right-leg {
      position: absolute;
      top: 385px;
      left: 99px;
      z-index: 2;
    }

    .left-foot {
      position: absolute;
      top: 540px;
      left: -24px;
      z-index: 2;
    }

    .right-foot {
      position: absolute;
      top: 540px;
      left: 131px;
      z-index: 2;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
