<template>
    <div class="hangman">
          <figure class="bar"><img src="../assets/imgs/bar.png" /> </figure>
         <div class="hangman-container">
          <figure class="head"><img src="../assets/imgs/head.png" /> </figure>
          <figure class="neck"><img src="../assets/imgs/neck.png" /></figure>
          <figure class="corpus"><img src="../assets/imgs/corpus.png" /></figure>
          <figure class="right-arm"><img src="../assets/imgs/right-arm.png" /></figure>
          <figure class="right-hand"><img src="../assets/imgs/right-hand.png" /></figure>
          <figure class="left-arm"><img src="../assets/imgs/left-arm.png" /></figure>
          <figure class="left-hand"><img src="../assets/imgs/left-hand.png" /></figure>
          <figure class="left-leg"><img src="../assets/imgs/left-leg.png" /></figure>
          <figure class="right-leg"><img src="../assets/imgs/right-leg.png" /></figure>
          <figure class="right-foot"><img src="../assets/imgs/right-foot.png" /></figure>
          <figure class="left-foot"><img src="../assets/imgs/left-foot.png" /></figure>
          </div>
    </div>
</template>

<script>
export default {
  name: 'HangMan',
}

</script>

<style scoped lang="scss">
.hangman {
  background-color:red;  
  flex: 0 0 30%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;

  .bar {
      transform: scale(0.5, 0.5) translateX(-225px) translateY(30px);
    };

  .hangman-container {
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0.5, 0.5) translateY(-250px) translateX(-40px);

    .head{
      z-index:2;
    }
    
    .neck {
      transform: translateY(-30px);
      z-index:1;
    }
    .corpus {
      transform: translateY(-50px);
      z-index:1;
    }
    .right-arm {
      position: absolute;
      top:241px;
      left:110px;
      z-index:2;
    }

    .right-hand {
      position: absolute;
      top:341px;
      left:210px;
      z-index:1;
    }
    .left-hand {
      position: absolute;
      top:341px;
      left:-48px;
      z-index:1;
    }
    .left-arm {
      position: absolute;
      top:241px;
      left:-40px;
      z-index:2;
    }
    .left-leg {
      position: absolute;
      top:385px;
      left:10px;
      z-index:2;
    }

     .right-leg {
      position: absolute;
      top:385px;
      left:99px;
      z-index:2;
    }

    .left-foot {
      position: absolute;
      top:540px;
      left:-24px;
      z-index:2;
    }

    .right-foot {
      position: absolute;
      top:540px;
      left:131px;
      z-index:2;
    }
  }
}
</style>
