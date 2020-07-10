<template>
  <div class="homePage">
    <div class="back">
      <router-link to="/home">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 1024 1024" width="24" height="24" style="fill: rgb(255, 255, 255);"><path d="M872 572H266.8l144.3-183c4.1-5.2.4-13-6.3-13H340c-9.8 0-19.1 4.5-25.1 12.2l-164 208c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
      </router-link>
    </div>
      <div class="avator" >
        <img src="/static/images/detail/avator1.png" alt="">
        <div>
          <span class="title">倾听他的故事</span>
          <span class="info">每个人都有快乐的时候，你呢？</span>
        </div>
        <span  @click="collect" :class="{star_circle: true, collected: isCollect}">
          <svg v-if="isCollect" xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 576 512" width="16" height="16" style="fill: rgb(255, 255, 255);"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 576 512" width="16" height="16" style="fill: rgb(251, 251, 251);"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
        </span>
        <span class="message_circle">
          <router-link to="/chart">
           <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="64 64 896 896" width="18" height="18" style="fill: rgb(251, 251, 251);"><path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>

          </router-link>
        </span>
      </div>
      <div class="work_card"> 
        <div class="desc">
          <span class="hisWorks">他的作品</span>
          <div class="hot">
            <div> 
              <div>97</div>
              <span>人气</span>
            </div>
            <div @click="toFans"> 
              <div >634</div>
              <span>粉丝</span>
            </div>
            <div> 
              <div>58</div>
              <span>关注</span>
            </div>
          </div>
        </div>
        <div class="works" >
          <div class="works_item" v-for="(item, index) in works" :key="index" @click="toAlbum">
            <div class="img_outer">
              <div v-for="img in item.imgs" >
                <img :src="img" alt="">
              </div>
            </div>
            <div>
              <div class="title">{{item.title}}</div>
              <span class="info">{{item.info}}</span>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isCollect: false,
        works: [
          {
            imgs: [
            '/static/images/home/works1.jpg',
            '/static/images/home/works2.jpg',
            '/static/images/home/works3.jpg',
            '/static/images/home/works4.jpg',
            ], 
            title: '夜景', 
            info: 'Websit Back' 
          },
          {
            imgs: [
            '/static/images/home/works5.jpg',
            '/static/images/home/works6.jpg',
            '/static/images/home/works7.jpg',
            '/static/images/home/works8.jpg',
            ], 
            title: '家居', 
            info: 'Websit Back' 
          },
          {
            imgs: [
            '/static/images/home/works1.jpg',
            '/static/images/home/works2.jpg',
            '/static/images/home/works3.jpg',
            '/static/images/home/works4.jpg',
            ], 
            title: '风景', 
            info: 'ssds' 
          },
          {
            imgs: [
            '/static/images/home/works1.jpg',
            '/static/images/home/works2.jpg',
            '/static/images/home/works3.jpg',
            '/static/images/home/works4.jpg',
            ], 
            title: '未分类', 
            info: '待分类' 
          }
        ]
      }
    },
    methods: {
      collect(){
        this.isCollect = !this.isCollect
      },
      toAlbum(){
        this.$router.push('/album')
      },
      toFans(){
        this.$router.push('/fans')
      }
    }
  }
</script>

<style lang="less" scoped>
.homePage {
  background: rgb(16,16,16);
  .back {
    display: inline-block;
    padding: 20px 20px;
  }
  .avator {
    position: relative;
    // margin: 20px 0;
    width: 100%;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      vertical-align: middle;
      display: inline-block;
      margin-left: 20px;
      margin-right: 10px;
    }
    &>div {
      display: inline-block;
      vertical-align: middle;
    }
    .title {
      display: block;
      font-family: PingFangSC;
      font-weight: 800;
      font-size: 16px;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
    }
    .info {
      font-family: PingFangSC;
      font-weight: 400;
      font-size: 12px;
      color: rgba(96, 96, 96, 1);
      line-height: 17px;
    }
    .star_circle, .message_circle {
      position: absolute;
      top: 10px;
      right: 70px;
      display: inline-block;
      width: 32px;
      height: 32px;
      line-height: 35px;
      text-align: center;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.39);
      color: #fff;
    }
    .star_circle.collected .svg-icon {
      animation: scales .5s;
    }
    .message_circle {
      right: 20px;
    }
    .collected {
      background-color: rgb(255, 188, 37);
    }

  }
  .work_card {
    margin-top: 20px;
    background: #fff;
    border-radius: 40px 40px 0 0;
    padding: 15px;
    animation: slideUp 1s;
    .desc {
      position: relative;
      margin: 10px 0;
      .hisWorks {
        position: absolute;
        top: 0px;
        left: 10px;
        border-radius: 60px;
        padding: 4px 10px;
        font-size: 14px;
        background: rgb(16, 16, 16);
        color: #fff;
      }
    }
    .hot {
      text-align: right;
      &>div {
        display: inline-block;
        margin-right: 20px;
        // font-size: 12px;
        font-family: Roboto;
        font-weight: 700;
        font-size: 16px;
        color: rgb(16, 16, 16);
        line-height: 19px;
        text-align: center;
        span {
          font-family: PingFangSC;
          font-weight: normal;
          font-size: 10px;
          color: rgba(213, 213, 213, 1);
        }
      }
    }
    .works {
      width: 100%;
      .works_item {
        width: 50%;
        box-sizing: border-box;
        display: inline-block;
        // border-radius: 10px;
        margin-bottom: 10px;
        overflow: hidden;
        .img_outer {
          box-sizing: border-box;
          &>div {
            display: inline-block;
            width: 50%;
            padding-left: 4px;
            box-sizing: border-box;
            vertical-align: top;
            font-size: 0;
            img {
              width: 100%;
              height: 100%;
              margin-bottom: 4px;
            }
          }
          div:nth-child(1) {
            img {
              border-radius: 10px 0 0 0;
            }
          }
          div:nth-child(2)  {
            img {
              border-radius: 0 10px 0 0;
            }
          }
          div:nth-child(3) {
            img {
              border-radius: 0 0 0 10px;
            }
          }
          div:nth-child(4){
            img {
              border-radius: 0 0 10px 0;
            }
          }
        }
        .title {
          font-family: PingFangSC;
          font-weight: 700;
          font-size: 14px;
          color: rgb(16, 16, 16);
          font-style: normal;
          letter-spacing: 0px;
          line-height: 20px;
          text-decoration: none;
        }
        .info {
          font-family: PingFangSC;
          font-weight: 400;
          font-size: 12px;
          color: rgb(223, 223, 223);
          font-style: normal;
          letter-spacing: 0px;
          line-height: 20px;
          text-decoration: none;
        }

      }
      .works_item:nth-child(2n) {
        padding-left: 6px;
      }
      .works_item:nth-child(2n -1) {
        padding-right: 6px;
      }
    }
    @keyframes slideUp {
      0% {
        transform: translateY(80%);
      }
      100% {
        transform: translateY(0%);
      }
    }
    .scales-leave-active {
       animation: scales .5s reverse;
    }
    @keyframes scales {
      0% {
        transform: scale(0.2, 0.2);
      }
      100% {
        transform: scale(1,1);
      }
    }
  } 
}
</style>