<template>
  <div class="album">
    <div class="back">
      <router-link to="/homePage">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 1024 1024" width="24" height="24" style="fill: rgb(16, 16, 16);"><path d="M872 572H266.8l144.3-183c4.1-5.2.4-13-6.3-13H340c-9.8 0-19.1 4.5-25.1 12.2l-164 208c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
      </router-link>
    </div>
    <div class="more" @click="showShareCard"> 
      <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="24" height="24" style="fill: rgb(16, 16, 16);"><path d="M5.778 13.333c1.227 0 2.222 0.995 2.222 2.222s-0.995 2.222-2.222 2.222c-1.227 0-2.222-0.995-2.222-2.222s0.995-2.222 2.222-2.222zM16 13.333c1.227 0 2.222 0.995 2.222 2.222s-0.995 2.222-2.222 2.222c-1.227 0-2.222-0.995-2.222-2.222s0.995-2.222 2.222-2.222zM26.222 13.333c1.227 0 2.222 0.995 2.222 2.222s-0.995 2.222-2.222 2.222c-1.227 0-2.222-0.995-2.222-2.222s0.995-2.222 2.222-2.222z"></path></svg>
    </div>
    <div class="artcle">
      <div>
         <span class="title">夜景</span>
         <img class="avator" src="/static/images/detail/avator1.png" alt="">
      </div>
      <p>
        你看，尽管我们说着生活有多不如意，这即将过去的一年有多糟糕，可是每个人都在为下一年而努力，期待着亮丽的明天。
      </p>
    </div>

    <div @click="collect" :class="{ collected: isCollected, collect_btn: true}">
      <span  v-if="isCollected">收藏成功</span>
      <span v-else>+ 收藏作品</span>
    </div>
    <div class="list_wrap">
      <div class="list_item" v-for=" (item, index) in results" :key="index">
        <router-link to="/home/list/1">
          <img :src="item.url" alt="">
          <div class="pic_title">{{item.title}}</div>
          <div class="author">
            <span > {{ item.Author}}</span>
            <span>  
              <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 24 24" width="12" height="12" style="fill: rgb(213, 213, 213);"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>
            </span>
            <span> {{ item.downLoad }} </span>
          </div>

        </router-link>
      </div>
    </div>

        <!-- 分享模块 -->
     <transition name="bounce">
      <div class="share_card" v-if="isVisibleShareCard">
        <div class="share_container">
          <div class="title"> 分享给好友</div>
          <div class="share_wrapp">
            <div class="share_item">
              <div class="share_bg">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="22" height="22" style="fill: rgb(255, 255, 255);"><path d="M23.38 16.685l-0.928-2.395c0-0.028 0.013-0.5 0.013-0.744-0.001-4.096-1.871-8.213-6.465-8.213s-6.464 4.117-6.464 8.213c0 0.244 0.012 0.716 0.013 0.744l-0.928 2.395c-0.253 0.687-0.507 1.4-0.689 2.013-0.876 2.919-0.592 4.127-0.376 4.153 0.464 0.057 1.805-2.197 1.805-2.197 0 1.307 0.651 3.011 2.056 4.24-0.525 0.169-1.171 0.427-1.584 0.743-0.373 0.285-0.327 0.575-0.259 0.693 0.293 0.513 5.053 0.327 6.427 0.167 1.373 0.16 6.132 0.347 6.427-0.168 0.067-0.117 0.113-0.407-0.259-0.692-0.415-0.316-1.060-0.573-1.587-0.741 1.407-1.231 2.056-2.936 2.056-4.241 0 0 1.343 2.255 1.807 2.197 0.216-0.027 0.504-1.237-0.377-4.155-0.187-0.617-0.433-1.325-0.688-2.012zM24.741 27.655c-0.497 0.869-1.111 1.189-1.917 1.409-0.32 0.087-0.664 0.144-1.059 0.184-0.587 0.060-1.315 0.087-2.151 0.085-1.276-0.003-2.535-0.059-3.779-0.166l0.166 0.012c-0.923 0.087-2.38 0.152-3.613 0.155-0.068 0.001-0.148 0.001-0.228 0.001-0.677 0-1.347-0.031-2.009-0.093l0.085 0.006c-0.395-0.037-0.755-0.102-1.103-0.194l0.046 0.010c-0.807-0.219-1.42-0.54-1.92-1.412-0.252-0.432-0.4-0.951-0.4-1.505 0-0.247 0.030-0.488 0.086-0.718l-0.004 0.021c-0.789-0.176-1.335-0.644-1.705-1.215-0.177-0.272-0.318-0.587-0.407-0.924l-0.005-0.023c-0.1-0.388-0.158-0.833-0.158-1.292 0-0.064 0.001-0.128 0.003-0.192l-0 0.009c0.017-1.047 0.249-2.349 0.709-3.883 0.187-0.621 0.436-1.344 0.757-2.207l0.737-1.907c-0.001-0.077-0.002-0.172-0.003-0.267v-0.004c0-6.073 3.248-10.88 9.131-10.88 5.884 0 9.131 4.807 9.131 10.88l-0.001 0.271 0.751 1.941c0.3 0.808 0.551 1.537 0.741 2.168 0.464 1.533 0.696 2.839 0.713 3.888 0.009 0.543-0.040 1.035-0.157 1.477-0.088 0.328-0.215 0.64-0.413 0.944-0.368 0.569-0.912 1.035-1.703 1.213 0.173 0.739 0.073 1.52-0.32 2.205z"></path></svg>
              </div>
              QQ好友
            </div>
            <div class="share_item">
              <div class="share_bg">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 576 512" width="22" height="22" style="fill: rgb(255, 255, 255);"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
              </div>
              QQ空间
            </div>
            <div class="share_item">
              <div class="share_bg">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="22" height="22" style="fill: rgb(255, 255, 255);"><path d="M13.333 19.568v-0.083c0-3.344 2.688-6.157 6.337-6.977-0.485-3.069-3.725-5.575-7.804-5.575-4.427 0-7.867 2.951-7.867 6.373 0 1.292 0.48 2.533 1.387 3.597 0.043 0.051 0.111 0.125 0.203 0.22 0.758 0.778 1.252 1.816 1.335 2.969l0.001 0.015c0.691-0.406 1.523-0.647 2.41-0.647 0.261 0 0.518 0.021 0.768 0.061l-0.028-0.004c0.221 0.035 0.403 0.061 0.54 0.080 0.374 0.051 0.807 0.081 1.246 0.081 0.519 0 1.029-0.041 1.526-0.12l-0.055 0.007zM13.943 22.169c-0.625 0.113-1.344 0.177-2.078 0.177-0.562 0-1.114-0.038-1.656-0.111l0.063 0.007c-0.341-0.044-0.547-0.076-0.753-0.109l0.147 0.020c-0.099-0.016-0.214-0.026-0.331-0.026-0.41 0-0.793 0.115-1.119 0.314l0.009-0.005-2.539 1.531c-0.16 0.1-0.355 0.16-0.564 0.16-0.032 0-0.063-0.001-0.094-0.004l0.004 0c-0.547-0.043-0.975-0.497-0.975-1.052 0-0.029 0.001-0.058 0.004-0.087l-0 0.004 0.2-2.375c0.005-0.052 0.007-0.113 0.007-0.174 0-0.567-0.226-1.081-0.593-1.457l0 0c-0.107-0.109-0.212-0.223-0.313-0.34l-0.008-0.009c-1.272-1.493-2.023-3.336-2.023-5.328 0-4.992 4.716-9.039 10.533-9.039 5.413 0 9.871 3.503 10.467 8.011 4.496 0.204 8.067 3.353 8.067 7.208 0 1.591-0.608 3.061-1.639 4.253-0.068 0.080-0.155 0.173-0.26 0.28-0.297 0.299-0.48 0.711-0.48 1.165 0 0.048 0.002 0.095 0.006 0.142l-0-0.006 0.161 1.897c0.001 0.019 0.002 0.040 0.002 0.062 0 0.447-0.347 0.814-0.786 0.845l-0.003 0c-0.021 0.002-0.047 0.003-0.072 0.003-0.169 0-0.327-0.048-0.461-0.13l0.004 0.002-2.057-1.223c-0.257-0.154-0.567-0.246-0.898-0.246-0.094 0-0.187 0.007-0.278 0.022l0.010-0.001c-0.196 0.031-0.36 0.053-0.491 0.071-0.421 0.053-0.853 0.083-1.292 0.083-3.592 0-6.664-1.877-7.924-4.535zM23.245 23.916c0.203-0.033 0.436-0.052 0.674-0.052 0.561 0 1.097 0.104 1.591 0.294l-0.030-0.010c0.199-0.787 0.59-1.464 1.122-2.003l-0 0c0.067-0.067 0.116-0.12 0.141-0.149 0.652-0.753 0.991-1.617 0.991-2.511 0-2.405-2.537-4.552-5.867-4.552s-5.867 2.147-5.867 4.552 2.537 4.552 5.867 4.552c0.321 0 0.64-0.021 0.952-0.061 0.107-0.013 0.251-0.033 0.427-0.061z"></path></svg>
              </div>
              微信好友
            </div>
            <div class="share_item">
              <div class="share_bg">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="22" height="22" style="fill: rgb(255, 255, 255);"><path d="M11.556 15.348c-0.004 0-0.008 0-0.012 0-0.94 0-1.701-0.762-1.701-1.701 0-0.004 0-0.008 0-0.013v0.001c0-0.957 0.756-1.715 1.713-1.715 0.956 0 1.713 0.757 1.713 1.715 0 0.956-0.757 1.713-1.713 1.713zM20.444 15.348c-0.004 0-0.008 0-0.012 0-0.94 0-1.701-0.762-1.701-1.701 0-0.004 0-0.008 0-0.013v0.001c0-0.957 0.757-1.715 1.713-1.715 0.957 0 1.713 0.757 1.713 1.715 0 0.956-0.756 1.713-1.713 1.713zM9.097 25.62l0.953-0.581c0.791-0.49 1.75-0.78 2.776-0.78 0.293 0 0.581 0.024 0.861 0.069l-0.031-0.004c0.283 0.044 0.515 0.079 0.693 0.101 0.541 0.072 1.093 0.108 1.649 0.108 5.893 0 10.533-4.029 10.533-8.8s-4.64-8.8-10.533-8.8-10.533 4.029-10.533 8.8c0 1.821 0.667 3.564 1.909 5.041 0.064 0.076 0.16 0.183 0.285 0.313 0.92 0.957 1.486 2.259 1.486 3.694 0 0.156-0.007 0.31-0.020 0.462l0.001-0.020-0.033 0.396zM8.257 29.256c-0.201 0.127-0.445 0.203-0.707 0.203-0.736 0-1.333-0.597-1.333-1.333 0-0.039 0.002-0.077 0.005-0.115l-0 0.005 0.251-3.013c0.006-0.066 0.009-0.144 0.009-0.222 0-0.717-0.283-1.368-0.743-1.847l0.001 0.001c-0.135-0.138-0.267-0.283-0.395-0.432l-0.010-0.012c-1.592-1.895-2.533-4.231-2.533-6.757 0-6.333 5.909-11.467 13.2-11.467s13.2 5.133 13.2 11.467-5.909 11.467-13.2 11.467c-0.68 0-1.347-0.044-1.999-0.131-0.425-0.055-0.684-0.094-0.941-0.137l0.183 0.025c-0.125-0.021-0.269-0.033-0.416-0.033-0.513 0-0.993 0.145-1.4 0.396l0.011-0.007-3.183 1.941z"></path></svg>
              </div>
              朋友圈
            </div>
            <div class="share_item">
              <div class="share_bg">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="22" height="22" style="fill: rgb(255, 255, 255);"><path d="M23.543 19.771l-1.885-1.885 1.885-1.885c0.965-0.965 1.562-2.299 1.562-3.771 0-2.946-2.388-5.333-5.333-5.333-1.473 0-2.806 0.597-3.771 1.562v0l-1.885 1.885-1.885-1.885 1.885-1.885c1.443-1.42 3.424-2.297 5.611-2.297 4.418 0 8 3.582 8 8 0 2.186-0.877 4.168-2.298 5.612l-1.884 1.884zM19.771 23.543l-1.885 1.885c-1.452 1.475-3.471 2.389-5.703 2.389-4.418 0-8-3.582-8-8 0-2.232 0.914-4.251 2.388-5.702l1.886-1.886 1.885 1.885-1.885 1.885c-0.965 0.965-1.562 2.299-1.562 3.771 0 2.946 2.388 5.333 5.333 5.333 1.473 0 2.806-0.597 3.771-1.562v0l1.885-1.885 1.885 1.885zM19.771 10.343l1.887 1.887-9.428 9.427-1.887-1.885 9.428-9.427z"></path></svg>
              </div>
              复制链接
            </div>
            <div class="share_item">
              <div class="share_bg">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="20" height="20" style="fill: rgb(255, 255, 255);"><path d="M6 14c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2zM26 14c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2zM16 14c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2z"></path></svg>
              </div>
              更多
            </div>

            <div class="share_item"></div>
            <div class="share_item"></div>
          </div>
        </div>
        <div class="cancel" @click="hideShareCard">取消</div>
      </div>
     </transition>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isCollected: false,
        isVisibleShareCard: false,
        list: [],
        results: [
          { url: '/static/images/search1.jpg', title: '黑板', downLoad: '1204', Author: 'Website Back...'},
          { url: '/static/images/search3.jpg', title: '城市', downLoad: '1204', Author: 'Website Back...'},
          { url: '/static/images/search4.jpg', title: '舒适', downLoad: '1204', Author: 'Website Back...'},
          { url: '/static/images/search2.jpg', title: '咖啡生活', downLoad: '1204', Author: 'Website Back...'},
          { url: '/static/images/search5.jpg', title: '马路', downLoad: '1204', Author: 'Website Back...'},
          { url: '/static/images/search6.jpg', title: '家居室内', downLoad: '1204', Author: 'Website Back...'},
        ]
      }
    },
    methods: {
      collect(){
        this.isCollected = !this.isCollected
      },
      showShareCard(){
        this.isVisibleShareCard = true
      },
      hideShareCard(){
        this.isVisibleShareCard = false
      }
    }
  }
</script>

<style lang="less" scoped>
  .album {
    background: #fff;
    padding: 20px;
    .back {
      display: inline-block;
      padding: 20px 0px;
    }
    .more {
      position: fixed;
      display: inline-block;
      padding:10px;
      right: 10px;
      top: 20px;
      z-index: 4;
    }
    .artcle {
      .title {
        font-family: PingFangSC;
        font-weight: 700;
        font-size: 23px;
        color: rgb(16, 16, 16);
        font-style: normal;
        letter-spacing: 0px;
        line-height: 32px;
      }
      .avator {
        width: 23px;
        height: 23px;
        border-radius: 50%;
        border: 2px solid #000;
        float: right;
      }
      p {
        font-family: PingFangSC;
        font-weight: 400;
        font-size: 14px;
        color: rgba(200, 200, 200, 1);
        font-style: normal;
        letter-spacing: 0px;
        line-height: 30px;
        margin-bottom: 10px;
        margin-top: 10px;
      }
    }
    .collect_btn {
      text-align: center;
      height: 45px;
      line-height: 45px;
      border-radius: 8px;
      font-size: 14px;
      border: 2px solid rgb(16, 16, 16);
    }
    .collected {
      color: #fff;
      background-color: rgb(16, 16, 16);
    }
    .list_wrap {
      margin-top: 20px;
      width: 100%;
      column-count: 2;
      -moz-column-count:2; /* Firefox */
      -webkit-column-count:2; /* Safari 和 Chrome */
      column-count:2;
      animation: slidUp .5s;
      .list_item {
        break-inside: avoid;
        padding-bottom: 20px;
        box-sizing: border-box;
        .pic_title {
          font-family: PingFangSC;
          font-weight: 800;
          font-size: 14px;
          color: rgb(16, 16, 16);
          height: 34px;
          line-height: 34px;
        }
        .author {
          font-family: PingFangSC;
          font-weight: 400;
          font-size: 12px;
          color: rgb(223, 223, 223);
          line-height: 20px;
          text-decoration: none;
        }
        img {
          width: 100%;
          border-color: rgb(187, 187, 187);
          border-width: 0px;
          border-style: solid;
          border-radius: 8px;
        }
      }
      .search_item:nth-child(2n) {
        padding-left: 5px;
      }
      .search_item:nth-child(2n+1) {
        padding-right: 5px;
      }
    }
    .share_card {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      background: #fff;
      border-radius: 40px 40px 0 0;
      position: fixed;
      bottom: 0;
      z-index: 3;
      width: 100%;
      // height: 293px;
      // animation: bounce-in 1s;
      .share_container {
        padding: 15px 30px;

      }
      .title {
        font-family: PingFangSC;
        font-weight: 800;
        font-size: 14px;
        color: rgb(16, 16, 16);
        line-height: 30px;
        height: 30px;
        text-align: center;
      }
      .share_wrapp {
        margin: 20px 0;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .share_item {
          font-size: 12px;
          // display: inline-block;
          flex: 1;
          width: 25%;
          color: rgba(200, 200, 200, 1);
          box-sizing: border-box;
          padding: 10px;
          text-align: center;
          .share_bg {
            display: inline-block;
            width: 45px;
            height: 45px;
            line-height: 55px;
            margin-bottom: 10px;
            z-index: 9;
            background-color: rgb(16, 16, 16);
            border-radius: 50%;
            text-align: center;
          }
        }
      }
      .cancel {
        background-color: rgb(244, 244, 244);
        font-size: 14px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        font-weight: bold;
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
    .bounce-enter-active {
      animation: bounce-in 1s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: translate(0, 100%);
      }
      100% {
         transform: translate(0, 0);
      }
    }
  }
</style>