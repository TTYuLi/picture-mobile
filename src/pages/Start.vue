<template>
  <div class="start">
    <div class="start_action">
      <span class="phone">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="64 64 896 896" width="60" height="60" style="fill: rgb(255, 255, 255);"><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path></svg>
      </span>
      <div class="start_word">
        <span>打开生活，发现美好</span>
      </div>
      <div>
        <router-link to="/login">
         <div class="circle">

          <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="24" height="24" style="fill: rgb(255, 255, 255);"><path d="M21.563 14.667l-7.152-7.152 1.885-1.885 10.371 10.371-10.371 10.371-1.885-1.885 7.152-7.152h-16.229v-2.667z"></path></svg>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
  .start {
    width: 100%;
    // height: 100%;
    height: 100vh;
    text-align: center;
    background-image: url('/static/images/start.jpg');
    background-size: 100% 100%;
    .start_action {
      position: absolute;
      // height: 400px;
      left: 0;
      right: 0;
      top: 280px;
      bottom: 0
    }
    .phone {
      // animation: name duration timing-function delay iteration-count direction fill-mode;
      // animation:turn 1s linear infinite;    
      // transition: all 2s ease;
      svg {
        transform-origin: left bottom;
        // transform: rotate(-40deg);
        animation: turn 0.5s linear 1;    

      }
    }
    .animated {
      // -webkit-animation-duration: 1s;
      // animation-duration: 1s;
      // -webkit-animation-fill-mode: both;
      // animation-fill-mode: both;
    }
   
    .start_word {
      color: #fff;
      font-size: 15px;
      font-weight: bold;
      font-family: PingFangSC;
      margin: 20px 0;
    }
    .circle {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background-color: rgb(232, 52, 52);
      box-shadow: rgba(232, 52, 52, 0.61) 0px 0px 50px 0px;
      display: inline-block;
      text-align: center;
      line-height: 54px;
      animation: move 0.5s linear 1;    
      svg {
        height: 54px;
      }
    }
     /* 
      turn : 定义的动画名称
      1s : 动画时间
      linear : 动画以何种运行轨迹完成一个周期
      infinite :规定动画应该无限次播放
     */
    @keyframes turn{
      0%{-webkit-transform:rotate(-40deg);}
      100%{-webkit-transform:rotate(0deg);}
    }
     /* 
      move : 定义的动画名称
      1s : 动画时间
      linear : 动画以何种运行轨迹完成一个周期
      infinite :规定动画应该无限次播放
     */
    @keyframes move{
      0%{-webkit-transform:translateX(-30px);}
      100%{-webkit-transform:translateX(0);}
    }
  }
</style>