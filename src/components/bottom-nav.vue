<template>
  <div class="bottom">
    <div class="nav">
      <div class="nav-item" v-for="(item, index) in navs" @click="navClick(index)">
        <img v-if="item.active" :class="{active: index != 3, imgActive: index == 3}" :src="item.imgActive" alt="">
        <img v-else :src="item.img" alt="">
      </div>
    </div>
    </grid>
  </div>
</template>
 
<script>
  import { XInput, Grid, GridItem } from 'vux'
  export default {
    components: {XInput, Grid, GridItem },
    data(){
      return {
        navs: [
          {
            path: '/home/list',
            active: true,
            img: '/static/svg/pic.svg',
            imgActive: '/static/svg/pic_active.svg'
          },
          {
            path: '/home/find',
            active: false,
            img: '/static/svg/find.svg',
            imgActive: '/static/svg/find_active.svg'
          },
          {
            path: '/home/message',
            active: false,
            img: '/static/svg/message.svg',
            imgActive: '/static/svg/message_active.svg'
          },
          {
            path: '/home/my',
            active: false,
            img: '/static/images/v2_q8xika.png',
            imgActive: '/static/images/v2_q8xika.png'
          }
        ]
      }
    },
    methods: {
      navClick(i){
        this.$router.push(this.navs[i].path)
        this.navs.map(v => { v.active = false})
        this.navs[i].active = true
      }
    }
  }
</script>

<style lang="less" scoped>
 .bottom {
    position: fixed;
    z-index: 99;
    width: 100%;
    // height: 60px;
    // line-height: 60px;
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
    .nav {
      display: flex;
      height: 60px;
      line-height: 60px;
      .nav-item {
        flex: 1;
        img {
          width: 22px;
          height: 22px;
          border-radius: 50%;
        }
        img.active {
          animation: zy 2.5s .15s linear 1;
          transform-origin: top ;
        }
        img.imgActive {
          border: 3px solid #000;
          width: 20px;
          height: 20px;
          animation: rotate 0.5s;
        }
        @keyframes rotate {
          10% {
            transform: rotate(-360deg);
          }
          100% {
            transform: rotate(0deg);
          }
         }
        @keyframes zy {
          10% {
            transform: rotate(30deg);
          }
          20% {
         transform: rotate(-15deg);
          }
          30% {
           transform: rotate(10deg);
          }
          40% {
         transform: rotate(-10deg);
          }
          50% ,100% {
         transform: rotate(0deg);
          }
        }
      }
    }
  }
</style>