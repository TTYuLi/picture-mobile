<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      transitionName: 'fold-left',
      // transitionName: 'fold-right',
    }
  },
  watch: {
    // 监听路由对象，决定使用哪种过渡效果
    '$route'(to, from){
      // 获取到携带的标记
      const routerType = to.params.routerType
      // console.log(to, from, routerType)
      // if(from.path == '/agree'){
      //   // 跳转页面
      //   console.log(from.path)
      //   this.transitionName = 'fold-left'
      // } else{
      //   // 后退页面
      //   this.transitionName = 'fold-right'
      // }
      // if(routerType === 'push'){
      //   // 跳转页面
      //   this.transitionName = 'fold-left'
      // } else{
      //   // 后退页面
      //   this.transitionName = 'fold-right'
      // }
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
#app {
  height: 100vh;
}
.fold-in-enter-active {
  animation: fold-left-in 1s;
}
.fold-in-leave-active {
  animation: fold-left-in 1s;
}
// push 页面时：新页面的进入动画
@keyframes fold-left-in{
  0% {
      transform: translate(100%, 0);
  }
  100% {
    transform: translate(0,0)
  }
}
  // push 页面时：原页面的退出动画
@keyframes fold-left-out{
  0% {
      transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%,0)
  }
}
  // 后退页面时： 即将展示页面的动画
@keyframes fold-right-in{
  0% {
      transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0,0)
  }
}
// 后退页面时： 后退页面的动画
@keyframes fold-right-out{
  0% {
      transform: translate(0, 0);
  }
  100% {
    transform: translate(100%,0)
  }
}
</style>
