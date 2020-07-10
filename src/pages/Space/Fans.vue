<template>
  <div class="fans">
    <div class="back">
      <router-link to="/homePage">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 1024 1024" width="24" height="24" style="fill: rgb(255, 255, 255);"><path d="M872 572H266.8l144.3-183c4.1-5.2.4-13-6.3-13H340c-9.8 0-19.1 4.5-25.1 12.2l-164 208c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
      </router-link>
    </div>
    <div class="fans-container">
      <div class="fans-item" v-for="(item, index) in fans">
        <img :src="item.src" alt="">
        <div class="title">
          <div>{{item.title}}</div>
          <span>作品 </span> {{ item.works}}
          <span>粉丝 </span> {{ item.fans}}
        </div>

        <div :class="{ collected: item.isCollected, collect_circle: true}" @click="collect(index, item.isCollected)">
          <svg v-if="item.isCollected" xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 576 512" width="18" height="18" style="fill: rgb(255, 255, 255);"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 576 512" width="18" height="18" style="fill: rgb(251, 251, 251);"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        fans: [
          {
            src: '/static/images/fans/fans1.jpg',
            title: '太酷不给撩',
            works: 90,
            fans: 456,
            isCollected: true
          },
          {
            src: '/static/images/fans/fans2.jpg',
            title: '炒菜不放盐',
            works: 90,
            fans: 456,
            isCollected: false
          },
          {
            src: '/static/images/fans/fans3.jpg',
            title: '这个杀手有点冷',
            works: 90,
            fans: 456,
            isCollected: true
          },
          {
            src: '/static/images/fans/fans4.jpg',
            title: '我是钢铁侠',
            works: 90,
            fans: 456,
            isCollected: false
          },
          {
            src: '/static/images/fans/fans5.jpg',
            title: '你的酒馆打了烊',
            works: 90,
            fans: 456,
            isCollected: true
          },
          {
            src: '/static/images/fans/fans6.jpg',
            title: '野猫梁上走',
            works: 90,
            fans: 456,
            isCollected: true
          },
          {
            src: '/static/images/fans/fans1.jpg',
            title: '太酷不给撩',
            works: 90,
            fans: 456,
            isCollected: true
          },
          {
            src: '/static/images/fans/fans2.jpg',
            title: '炒菜不放盐',
            works: 90,
            fans: 456,
            isCollected: false
          },
          {
            src: '/static/images/fans/fans3.jpg',
            title: '这个杀手有点冷',
            works: 90,
            fans: 456,
            isCollected: true
          },
        ]
      }
    },
    methods: {
      collect(i, collected){
        this.fans[i].isCollected =  !collected
      }
    }
  }
</script>

<style lang="less" scoped>
  .fans {
    background-color: rgb(16, 16, 16);
    height: 100vh;
    .back {
      display: inline-block;
      padding: 20px 20px;
    }
    .fans-container {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      background: #fff;
      border-radius: 40px 40px 0 0;
      padding: 20px;
      box-sizing: border-box;
      .fans-item {
        position: relative;
        margin: 15px 0;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid rgb(16,16,16);
          vertical-align: middle;
          margin-right: 10px;
          animation: rotate-in 1s;
        }
        .title {
          display: inline-block;
          vertical-align: middle;
          font-size: 12px;
          color: rgb(213, 213, 213);
          div {
            font-family: PingFangSC;
            font-weight: 700;
            font-size: 15px;
            color: #101010;
            font-style: normal;
            letter-spacing: 0px;
            line-height: 21px;
            margin-right: 5px;
          }
          span {
            font-family: PingFangSC;
            font-weight: 400;
            font-size: 12px;
            color: rgb(213, 213, 213);
            font-style: normal;
            letter-spacing: 0px;
            line-height: 18px;
          }
        }
        .collect_circle {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 32px;
          height: 32px;
          line-height: 36px;
          border-radius: 50%;
          text-align: center;
          background-color: rgb(16, 16, 16);
        }
        .collected {
          background-color: rgb(255, 188, 37);
        }
      }
    }
    @keyframes rotate-in {
      0% {
        transform: rotate(-360deg);
      }
      100% {
        transform: rotate(0);
      }
    }
  }
</style>