<template>
  <div class="login">
    <div class="back">
      <router-link to="/start">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 1024 1024" width="24" height="24" style="fill: rgb(16, 16, 16);"><path d="M872 572H266.8l144.3-183c4.1-5.2.4-13-6.3-13H340c-9.8 0-19.1 4.5-25.1 12.2l-164 208c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
      </router-link>
    </div>
    <div class="welcome">
      欢迎来到摄图
    </div>
    <div class="login-form">
      <div class="ipt_outer">
        <div class="tel-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="22" height="22" style="fill: rgb(16, 16, 16);"><path d="M8 5.333v21.333h16v-21.333h-16zM6.667 2.667h18.667c0.736 0 1.333 0.597 1.333 1.333v0 24c0 0.736-0.597 1.333-1.333 1.333v0h-18.667c-0.736 0-1.333-0.597-1.333-1.333v0-24c0-0.736 0.597-1.333 1.333-1.333v0zM16 22.667c0.736 0 1.333 0.597 1.333 1.333s-0.597 1.333-1.333 1.333v0c-0.736 0-1.333-0.597-1.333-1.333s0.597-1.333 1.333-1.333v0z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" style="overflow: visible; filter: none;" width="1" height="22"><path d="M 0.5 0 L 0.5 14" stroke="rgba(221,221,221,1)" stroke-width="1px" stroke-dasharray=""></path><path d="M 0.5 0 L 0.5 14" stroke="transparent" stroke-width="10" style="pointer-events: auto;"></path></svg>
        </div>
        <div  class="ipt">
          <x-input type="tel" placeholder="请输入手机号码" required></x-input>
        </div>
      </div>
      <div class="ipt_outer">
        <div class="tel-icon">
         <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="22" height="22" style="fill: rgb(16, 16, 16);"><path d="M16 1.333l10.956 2.435c0.602 0.137 1.044 0.668 1.044 1.301v0 13.316c-0 2.764-1.402 5.201-3.534 6.638l-0.028 0.018-8.437 5.625-8.437-5.625c-2.16-1.455-3.562-3.891-3.563-6.655v-13.317c0-0.634 0.442-1.164 1.035-1.3l0.009-0.002 10.956-2.435zM16 4.065l-9.333 2.073v12.247c0 1.843 0.935 3.467 2.356 4.425l0.019 0.012 6.959 4.64 6.959-4.64c1.44-0.97 2.374-2.594 2.375-4.436v-12.248l-9.333-2.072zM16 9.333c0 0 0.001 0 0.001 0 1.473 0 2.667 1.194 2.667 2.667 0 0.982-0.531 1.84-1.321 2.303l-0.013 0.007-0.001 5.691h-2.667v-5.691c-0.803-0.47-1.333-1.328-1.333-2.309 0-1.473 1.194-2.667 2.667-2.667v0z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" style="overflow: visible; filter: none;" width="1" height="22"><path d="M 0.5 0 L 0.5 14" stroke="rgba(221,221,221,1)" stroke-width="1px" stroke-dasharray=""></path><path d="M 0.5 0 L 0.5 14" stroke="transparent" stroke-width="10" style="pointer-events: auto;"></path></svg>
        </div>
         <div  class="ipt">
          <x-input type="text" placeholder="请输入验证码" required></x-input>
        </div>
        <div class="getCode"> 获取验证码</div>
      </div>
      <div class="info">
        未注册的手机号验证后自动创建摄图账号
      </div>
      <div class="ipt_outer">
        <x-button class="login_btn">登录</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, XInput, XButton  } from 'vux'
  export default {
    components: { Group, XInput, XButton  },

  }
</script>

<style lang="less" scoped>
  .login {
    height: 100vh;
    .back {
      width: 24px;
      height: 24px;
    }
    .welcome {
      width: 100%;
      font-family: PingFangSC;
      font-weight: bold;
      font-size: 26px;
      color: rgb(16, 16, 16);
      text-align: center;
      height: 100px;
      line-height: 100px;
    }
    .ipt_outer {
      position: relative;
      border-radius: 50px;
      background-color: rgb(245, 245, 245);
      margin: 20px 20px;
      .tel-icon {
        position: absolute;
        left: 0;
        top: center;
        display: inline-block;
        // width: 20px;
        top: 12px;
        left: 14px;
        // border-right: 1px solid;

      }
      .ipt {
        display: inline-block;
        margin-left: 40px;
      }
      .getCode {
        position: absolute;
        display: inline-block;
        background-color: rgb(16, 16, 16);
        border-radius: 50px;
        font-size: 12px;
        padding: 5px 20px;
        color: #fff;
        top: 8px;
        right: 0;
      }
      .login_btn {
        background-color: rgb(16, 16, 16);
        color: #fff;
        border-radius: 50px;
        font-size: 16px;
        height: 45px;
      }
      
    }
    .info {
      font-family: PingFangSC;
      font-weight: 400;
      font-size: 13px;
      color: rgba(200, 200, 200, 1);
      text-align: center;
    }
  }
</style>