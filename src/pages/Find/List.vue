<template>
  <div>
    <div class="tag-wrapper">
      <span class="active-tag" :style="{ left: left }">{{activedTitle}}</span>
      <span :class="{tag: true, actived:tag.actived }" v-for="(tag, index) in tags" :key="index" @click="tagClick(tag, index)"> {{ tag.name }}</span>
    </div>

    <div class="list">
      <div class="list-item" v-for="( item, index) in finds" :key="index">
        <div class="title"> {{ item.title}}</div>
        <p>{{ item.info }}</p>
        <div class="extra">
          <div class="hot">热门</div>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 24 24" width="12" height="12" style="fill: rgb(213, 213, 213);"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>
            4210
          </span>
        </div>
        <div> 
        </div>

        <div class="pic-box">
          <img v-for="img in item.imgs" :src="img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        activedTitle:'热门',
        left: 0,
        tags: [ 
          { name:'热门', actived: true},
          { name:'摄影', actived: false},
          { name:'人物', actived: false},
          { name:'风景', actived: false},
          { name:'动物', actived: false},
          { name:'抽象', actived: false},
          { name:'节日', actived: false},
        ],
        finds: [
          {
            title: '月亮与六便士',
            info: '贫穷的纠缠，病魔的折磨他的意识...',
            imgs: [
              '/static/images/find/moon1.jpg',
              '/static/images/find/moon2.jpg',
              '/static/images/find/moon3.jpg',
              '/static/images/find/moon4.jpg',
              '/static/images/find/moon5.jpg',
            ]
          },
          {
            title: '夜晚也很美',
            info: '屋内明黄色的灯光让气氛变得温和...',
            imgs: [
              '/static/images/find/night1.jpg',
              '/static/images/find/night2.jpg',
              '/static/images/find/night3.jpg',
              '/static/images/find/night4.jpg',
              '/static/images/find/night5.jpg',
            ]
          }
        ]
      }
    },
    methods: {
      tagClick(tag, index){
        this.tags.map(v => { v.actived = false})
        this.tags[index].actived = true
        this.left = 4 + 58 * index + 'px'
        this.activedTitle = tag.name
      }
    }
  }
</script>

<style lang="less" scoped>
  .tag-wrapper {
    position: relative;
    overflow-x: scroll;
    // word-break: ;
    white-space:nowrap;
    height: 44px;
    line-height: 44px;
    span {
      display: inline-block;
      // height: 30px;
      font-size: 14px;
      padding: 0px 15px;
      transition: opacity .3s;
    }
    span.actived {
      opacity: 0;
      padding: 0 20px;
    }
    .active-tag {
      position: absolute;
      top: 6px;
      display: inline-block;
      transition: left .3s;
      height: 30px;
      line-height: 30px;
      padding: 0 15px;
      text-align: center;
      line-height: 30px;
      background-color: rgb(16, 16, 16);
      border: none;
      font-weight: bold;
      color: rgb(255, 255, 255);
      border-radius: 17px;
      font-size: 14px;
    }

  }
  .list {
    padding: 20px 10px;
    margin-bottom: 60px;
    .list-item {
      position: relative;
      .title {
        font-family: PingFangSC;
        font-weight: 700;
        font-size: 20px;
        color: rgb(16, 16, 16);
        font-style: normal;
        letter-spacing: 0px;
        line-height: 28px;
      }
      p {
        font-family: PingFangSC;
        font-weight: 400;
        font-size: 14px;
        color: rgb(213, 213, 213);
        font-style: normal;
        letter-spacing: 0px;
        line-height: 20px;
      }
      .extra {
        position: absolute;
        right: 10px;
        top: 0;
        font-weight: 400;
        font-size: 12px;
        color: rgb(213, 213, 213);
        text-align: center;
        .hot {
          width: 44px;
          height: 16px;
          background-color: rgb(232, 52, 52);
          color: rgb(255, 255, 255);
          border-radius: 50px;
          font-size: 10px;
          text-align: center;
          margin-bottom: 10px;
        }
        svg {
          vertical-align: middle;
        }
      }
      .pic-box {
        white-space: nowrap;
        overflow-x: auto;
        margin: 15px 0;
        img {
          width: 138px;
          height: 240px;
          border-color: rgb(187, 187, 187);
          border-width: 0px;
          border-style: solid;
          border-radius: 8px;
          margin-right: 10px;
        }
      }
    }
  }
</style>