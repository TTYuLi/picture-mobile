<template>
  <div class="list">
    <div class="list_wrap">
      <div class="list_item" v-for=" (item, index) in results" :key="index">
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
  export default {
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
  .list_wrap {
      margin-top: 20px;
      width: 100%;
      column-count: 2;
      -moz-column-count:2; /* Firefox */
      -webkit-column-count:2; /* Safari 和 Chrome */
      column-count:2;

      .list_item {
        break-inside: avoid;
        padding-bottom: 10px;
        box-sizing: border-box;
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