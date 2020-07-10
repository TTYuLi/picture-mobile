<template>
  <div class="list">
    <div class="search_wrap">
      <div class="search_link" @click="to_search">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="20" height="20" style="fill: rgb(16, 16, 16);"><path d="M24.041 22.156l5.711 5.709-1.887 1.887-5.709-5.711c-2.027 1.636-4.634 2.625-7.472 2.625-0.006 0-0.012 0-0.018 0h0.001c-6.624 0-12-5.376-12-12s5.376-12 12-12 12 5.376 12 12c0 0.005 0 0.011 0 0.017 0 2.838-0.99 5.446-2.643 7.495l0.018-0.023zM21.367 21.167c1.629-1.674 2.633-3.962 2.633-6.485 0-0.005 0-0.010 0-0.015v0.001c0-5.157-4.177-9.333-9.333-9.333-5.157 0-9.333 4.176-9.333 9.333 0 5.156 4.176 9.333 9.333 9.333 0.004 0 0.009 0 0.015 0 2.523 0 4.812-1.005 6.487-2.635l-0.002 0.002 0.2-0.2z"></path></svg>
        <span>搜索热门壁纸</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon phone-icon" viewBox="0 0 32 32" width="24" height="24" style="fill: rgb(16, 16, 16);"><path d="M8 5.333v21.333h16v-21.333h-16zM6.667 2.667h18.667c0.736 0 1.333 0.597 1.333 1.333v0 24c0 0.736-0.597 1.333-1.333 1.333v0h-18.667c-0.736 0-1.333-0.597-1.333-1.333v0-24c0-0.736 0.597-1.333 1.333-1.333v0zM16 22.667c0.736 0 1.333 0.597 1.333 1.333s-0.597 1.333-1.333 1.333v0c-0.736 0-1.333-0.597-1.333-1.333s0.597-1.333 1.333-1.333v0z"></path></svg>
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
     
  </div>
</template>

<script>
import { XInput, Grid, GridItem } from 'vux'
  export default {
    components: {XInput, Grid, GridItem },
    data(){
      return {
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
      to_search(){
        this.$router.push('/search')
      }
    },
    created(){
      const oldList = [1, 2, 3, 4, 5, 6, 7]

      // 使用reduce函数接受一个初始值{ 0: [], 1: [], length: 2 },
      // 初始值包含两个空数组，和一个数组长度(Array.from方法要求将对象转数组时对象内要有这个属性)
      // 在reduce函数内根据索引做余2判断，因为分两，余0的加入第一个数组，余1的加入第二个数组
      // 最后reduce返回遍历完的对象 {0:[1,3,5,7],1:[2,4,6],length:2}
      // 使用Array.from({0:[1,3,5,7],1:[2,4,6],length:2}) 得到 数组 [[1,3,5,7],[2,4,6]]
      // 解构数组 使用concat合并，完事
      const newList = [].concat(...(Array.from(oldList.reduce((total, cur, index) => {
        total[index % 2].push(cur)  
        return total
      }, { 0: [], 1: [], length: 2 }))))

      console.log(newList)
    }
  }
</script>

<style lang="less" scoped>
.list {
  margin: 20px;
  .search_wrap {
    position: relative;
    padding-right: 40px;
    .phone-icon {
      position: absolute;
      right: 0px;
      top: 10px;
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
  .list_wrap {
    margin-top: 20px;
    width: 100%;
    column-count: 2;
    -moz-column-count:2; /* Firefox */
    -webkit-column-count:2; /* Safari 和 Chrome */
    column-count:2;

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
  

}

</style>