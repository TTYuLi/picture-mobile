<template>
  <div class="search">
    <div class="search_wrap">
      <div class="search_link" >
        <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="20" height="20" style="fill: rgb(16, 16, 16);"><path d="M24.041 22.156l5.711 5.709-1.887 1.887-5.709-5.711c-2.027 1.636-4.634 2.625-7.472 2.625-0.006 0-0.012 0-0.018 0h0.001c-6.624 0-12-5.376-12-12s5.376-12 12-12 12 5.376 12 12c0 0.005 0 0.011 0 0.017 0 2.838-0.99 5.446-2.643 7.495l0.018-0.023zM21.367 21.167c1.629-1.674 2.633-3.962 2.633-6.485 0-0.005 0-0.010 0-0.015v0.001c0-5.157-4.177-9.333-9.333-9.333-5.157 0-9.333 4.176-9.333 9.333 0 5.156 4.176 9.333 9.333 9.333 0.004 0 0.009 0 0.015 0 2.523 0 4.812-1.005 6.487-2.635l-0.002 0.002 0.2-0.2z"></path></svg>
         <x-input class="search_input" v-model="value" @on-enter="search" @on-change="search" type="text" placeholder="搜索热门壁纸"></x-input>
        <!-- <span>搜索热门壁纸</span> -->
        <span class="cancel" @click="to_home" v-if="!value">取消</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon phone-icon" viewBox="0 0 32 32" width="24" height="24" style="fill: rgb(16, 16, 16);"><path d="M8 5.333v21.333h16v-21.333h-16zM6.667 2.667h18.667c0.736 0 1.333 0.597 1.333 1.333v0 24c0 0.736-0.597 1.333-1.333 1.333v0h-18.667c-0.736 0-1.333-0.597-1.333-1.333v0-24c0-0.736 0.597-1.333 1.333-1.333v0zM16 22.667c0.736 0 1.333 0.597 1.333 1.333s-0.597 1.333-1.333 1.333v0c-0.736 0-1.333-0.597-1.333-1.333s0.597-1.333 1.333-1.333v0z"></path></svg>
    </div>
    <div class="history" v-if="!value">
      <div class="title">最近搜索</div>
      <div>
        <span class="tag"> 风景壁纸 </span>
        <span class="tag"> 手绘壁纸 </span>
      </div>
      <div class="title">热门搜索</div>
      <div>
        <span class="tag"> 古风壁画 </span>
        <span class="tag"> 情侣壁纸 </span>
      </div>
    </div>
    <div v-if="value" class="search_result">
      <div class="search_item" v-for=" (item, index) in results" :key="index">
        <img :src="item.url" alt="">
        <div class="pic_title">{{item.title}}</div>
        <div class="author">
          <span > {{ item.Author}}</span>
          <span>  
            <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 24 24" width="12" height="12" style="fill: rgb(213, 213, 213);"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>
          </span>
          <span> {{ item.downLoad }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import { XInput, Grid, GridItem,  Flexbox, FlexboxItem } from 'vux'
  export default {
    components: {XInput, Grid, GridItem, Flexbox, FlexboxItem},
    data(){
      return {
        value: '',
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
      to_home(){
        this.$router.push('/home')
      },
      search(val){

      }
    }
  }
</script>

<style lang="less" scoped>
 .search {
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
      // color: rgb(213, 213, 213);
      border-radius: 20px;
      font-size: 14px;
      margin-right: 30px;
      text-indent: 60px;
      .search_input {
        padding: 0;
        margin-right: 14px;

      }
      .cancel {
        font-family: PingFangSC;
        position: absolute;
        top: 0px;
        right: 16px;
        color: rgb(16, 16, 16);
        font-size: 14px;
      }
      svg {
        position: absolute;
        top: 10px;
        left: 20px;
      }
    }
    .history {
      .title {
        font-family: PingFangSC;
        font-weight: 400;
        font-size: 14px;
        color: rgb(200, 200, 200);
        margin: 20px 0
      }
      .tag {
        border-color: rgb(16, 16, 16);
        border-width: 2px;
        border-style: solid;
        border-radius: 37px;
        font-size: 14px;
        // text-align: center;
        padding: 3px 10px;
        margin-right: 10px;
      }
    }
    .search_result {
      //  display: flex;
      //  flex-wrap: wrap;
      //  justify-content: space-between;
      margin-top: 20px;
       width: 100%;
      column-count: 2;
      -moz-column-count:2; /* Firefox */
      -webkit-column-count:2; /* Safari 和 Chrome */
      column-count:2;

      .search_item {
        break-inside: avoid;
        // flex: 1;
        // width: 49%;
        // display: inline-block;
        // padding-right: 5px;
        padding-bottom: 10px;
        box-sizing: border-box;
        // vertical-align: top;
        // float: left;
        .pic_title {
          font-family: PingFangSC;
          font-weight: 700;
          font-size: 16px;
          color: rgb(16, 16, 16);
          height: 38px;
          line-height: 38px;
        }
        .author {
          font-family: PingFangSC;
          font-weight: 400;
          font-size: 14px;
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
 }
</style>