<template>
  <div class="chart">
    <div class="back">
      <router-link to="/homePage">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 1024 1024" width="24" height="24" style="fill: rgb(16, 16, 16);"><path d="M872 572H266.8l144.3-183c4.1-5.2.4-13-6.3-13H340c-9.8 0-19.1 4.5-25.1 12.2l-164 208c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
      </router-link>
    </div>
    <div class="chart_title">与倾听她的事物聊天中</div>
    <div class="chart_room">
      <div class="message_box" v-for="(item, index) in charts" :key="index">
        <div v-if="item.type == 1" class="left">
          <img class="avator" :src="item.avator" alt="">
          <div class="message">
            <p> {{ item.message}}  </p>
            <div v-if="item.type == 1" class="arrow arrow-left"></div>
          </div>
          <div class="time"> {{ item.time }}</div>
        </div>
        <div v-if="item.type == 2" class="right">
          <div class="message">
            <p> {{ item.message}}  </p>
            <div v-if="item.type == 2" class="arrow arrow-right"></div>
          </div>
          <img class="avator" :src="item.avator" alt="">
          <div class="time"> {{ item.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        charts: [
          {
            avator: '/static/images/fans/fans1.jpg',
            message: 'Hi~ 你的摄影很棒诶！！',
            time: '2020-04-18 14:21',
            type: '1'
          },
          {
            avator: '/static/images/fans/fans2.jpg',
            message: '谢谢称赞~',
            time: '2020-04-18 15:00',
            type: '2'
          },
          {
            avator: '/static/images/fans/fans1.jpg',
            message: '期待你继续更新的作品哈 ~  期待你继续更新的作品哈 ~期待你继续更新的作品哈 ~',
            time: '2020-04-18 14:21',
            type: '1'
          },
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
.chart {
  background-color: #fff;
  height: 100vh;
  padding: 20px;
  .back {
    display: inline-block;
    // padding: 20px 0px;
  }
  .chart_title {
    font-family: PingFangSC;
    font-weight: 700;
    font-size: 20px;
    color: rgb(16, 16, 16);
    font-style: normal;
    letter-spacing: 0px;
    line-height: 60px;
    height: 60px;
  }

  .chart_room {
    .message_box {
      position: relative;
      .avator {
        width: 40px;
        height: 40px;
        border: 2px solid rgb(16, 16,16);
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 20px;
      }
      .right {
        text-align:right;
      }
      .right .avator {
        margin-left: 20px;
      }
      .right .time {
        left: none;
        right: 74px;
      }
      .message {
        max-width: 70%;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        background-color: rgb(245, 245, 245);
        border-color: rgb(244, 244, 244);
        border-width: 2px;
        border-radius: 8px;
        font-size: 14px;
        padding: 10px;
        margin: 20px 0;
        p {

        }
        .arrow {
          display: inline-block;
          position: absolute;
          border-width: 6px;
          top: 12px;
          width: 0;
          border: 6px solid transparent;
          // border-top: 10px solid transparent;
          // border-bottom: 10px solid transparent;
          border-right-style: solid;
        }
        .arrow-left {
          left: -12px;
          border-right-color: rgb(244, 244, 244);

        }
        .arrow-right {
          right: -12px;
          border-left: 6px solid rgb(244, 244, 244);

          // border-left-color: rgb(244, 244, 244);
        }
      }
          .time {
            position: absolute;
            bottom: -5px;
            left: 74px;
            font-size: 10px;
            color: rgba(213, 213, 213, 1);
          }
    }
  }

}

</style>