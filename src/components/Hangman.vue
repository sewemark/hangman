<template>
  <div class="hangman">
    <figure
      v-if="effortCount>1"
      class="bar"
    >
      <img src="../assets/imgs/bar.png">
    </figure>
    <div class="hangman-container">
      <transition name="fade">
        <figure
          v-if="effortCount>1"
          class="head"
        >
          <img src="../assets/imgs/head.png">
        </figure>
      </transition>
      <transition name="fade">
        <figure
          v-if="effortCount>2"
          class="neck"
        >
          <img src="../assets/imgs/neck.png">
        </figure>
      </transition>
      <transition name="fade">
        <figure
          v-if="effortCount>3"
          class="corpus"
        >
          <img src="../assets/imgs/corpus.png">
        </figure>
      </transition>
      <transition name="fade">
        <figure
          v-if="effortCount>4"
          class="right-arm"
        >
          <img src="../assets/imgs/right-arm.png">
        </figure>
      </transition>
      <transition name="fade">
        <figure
          v-if="effortCount>5"
          class="right-hand"
        >
          <img src="../assets/imgs/right-hand.png">
        </figure>
      </transition>
      <transition name="fade">
        <figure
          v-if="effortCount>6"
          class="left-arm"
        >
          <img src="../assets/imgs/left-arm.png">
        </figure>
      </transition>
      <transition name="fade">
        <figure
          v-if="effortCount>7"
          class="left-hand"
        >
          <img src="../assets/imgs/left-hand.png">
        </figure>
      </transition>
      <transition name="fade">
        <figure
          v-if="effortCount>8"
          class="left-leg"
        >
          <img src="../assets/imgs/left-leg.png">
        </figure>
      </transition>
      <transition name="fade">
        <figure
          v-if="effortCount>9"
          class="right-leg"
        >
          <img src="../assets/imgs/right-leg.png">
        </figure>
      </transition>
      <transition name="fade">
        <figure
          v-if="effortCount>10"
          class="right-foot"
        >
          <img src="../assets/imgs/right-foot.png">
        </figure>
      </transition>
      <transition name="fade">
        <figure
          v-if="effortCount>11"
          class="left-foot"
        >
          <img src="../assets/imgs/left-foot.png">
        </figure>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Hangman",
  computed: {
    ...mapGetters(["effortCount", "gameState"])
  }
};
</script>