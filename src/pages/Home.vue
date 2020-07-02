<template>
  <div class="home">
    <div class="search_wrap">
         <!-- <x-input type="text" placeholder="请输入验证码" required></x-input> -->
      <div class="search_link" @click="to_search">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="20" height="20" style="fill: rgb(16, 16, 16);"><path d="M24.041 22.156l5.711 5.709-1.887 1.887-5.709-5.711c-2.027 1.636-4.634 2.625-7.472 2.625-0.006 0-0.012 0-0.018 0h0.001c-6.624 0-12-5.376-12-12s5.376-12 12-12 12 5.376 12 12c0 0.005 0 0.011 0 0.017 0 2.838-0.99 5.446-2.643 7.495l0.018-0.023zM21.367 21.167c1.629-1.674 2.633-3.962 2.633-6.485 0-0.005 0-0.010 0-0.015v0.001c0-5.157-4.177-9.333-9.333-9.333-5.157 0-9.333 4.176-9.333 9.333 0 5.156 4.176 9.333 9.333 9.333 0.004 0 0.009 0 0.015 0 2.523 0 4.812-1.005 6.487-2.635l-0.002 0.002 0.2-0.2z"></path></svg>
        <span>搜索热门壁纸</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon phone-icon" viewBox="0 0 32 32" width="24" height="24" style="fill: rgb(16, 16, 16);"><path d="M8 5.333v21.333h16v-21.333h-16zM6.667 2.667h18.667c0.736 0 1.333 0.597 1.333 1.333v0 24c0 0.736-0.597 1.333-1.333 1.333v0h-18.667c-0.736 0-1.333-0.597-1.333-1.333v0-24c0-0.736 0.597-1.333 1.333-1.333v0zM16 22.667c0.736 0 1.333 0.597 1.333 1.333s-0.597 1.333-1.333 1.333v0c-0.736 0-1.333-0.597-1.333-1.333s0.597-1.333 1.333-1.333v0z"></path></svg>
    </div>

    <router-view></router-view>
    <div class="bottom">
      <grid class="bottom_wrap">
        <grid-item class="bottom_item">
          <svg slot="icon"  xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="64 64 896 896" width="24" height="24" style="fill: rgb(16, 16, 16);"><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path></svg>
        </grid-item>
        <grid-item class="bottom_item">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="64 64 896 896" width="24" height="24" style="fill: rgb(16, 16, 16);"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm198.4-588.1a32 32 0 0 0-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271a32.06 32.06 0 0 0-17.7-42.7zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4zM464.4 422L422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z"></path></svg>
        </grid-item>
        <grid-item class="bottom_item">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="64 64 896 896" width="24" height="24" style="fill: rgb(16, 16, 16);"><path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
        </grid-item>
        <grid-item class="bottom_item">
          <img src="/static/images/v2_q8xika.png" draggable="false" style="display: inline-block; width: 24px">
        </grid-item>
        
      </grid>
    </div>
  </div>
</template>

<script>
  import { XInput, Grid, GridItem } from 'vux'
  export default {
    components: {XInput, Grid, GridItem },
    methods: {
      to_search(){
        this.$router.push('/search')
      }
    }
  }
</script>

<style lang="less" scoped>
  .home {
    margin: 20px;
    .search_wrap {
      position: relative;
      padding-right: 40px;
      .phone-icon {
        position: absolute;
        right: 0px;
        top: 10px;
      }
    }
    .search_link {
      position: relative;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: rgb(245, 245, 245);
      color: rgb(213, 213, 213);
      border-radius: 20px;
      font-size: 14px;
      margin-right: 30px;
      text-indent: 60px;
      svg {
        position: absolute;
        top: 10px;
        left: 20px;
      }
    }
  }
  .bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    text-align: center;
    background: #fff;
    .weui-grid:before, .weui-grid:after {
      border: none;
    }
    .bottom_wrap {
      .bottom_item {
        padding: 10px;
      }
    }
    img {
      border-radius: 50%;
    }
  }
</style>