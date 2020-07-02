<template>
  <div class="login">
    <div class="back">
      <router-link to="/start">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 1024 1024" width="24" height="24" style="fill: rgb(16, 16, 16);"><path d="M872 572H266.8l144.3-183c4.1-5.2.4-13-6.3-13H340c-9.8 0-19.1 4.5-25.1 12.2l-164 208c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
      </router-link>
    </div>
       <!-- <transition name="scale"> -->
        <div class="welcome">
            欢迎来到摄图
        </div>
       <!-- </transition> -->
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
        <x-button class="login_btn" @click.native="login">登录</x-button>
      </div>
      <div class="other_type">
        <span class="other_login_type">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="24" height="24" style="fill: rgb(16, 16, 16);"><path d="M13.333 19.568v-0.083c0-3.344 2.688-6.157 6.337-6.977-0.485-3.069-3.725-5.575-7.804-5.575-4.427 0-7.867 2.951-7.867 6.373 0 1.292 0.48 2.533 1.387 3.597 0.043 0.051 0.111 0.125 0.203 0.22 0.758 0.778 1.252 1.816 1.335 2.969l0.001 0.015c0.691-0.406 1.523-0.647 2.41-0.647 0.261 0 0.518 0.021 0.768 0.061l-0.028-0.004c0.221 0.035 0.403 0.061 0.54 0.080 0.374 0.051 0.807 0.081 1.246 0.081 0.519 0 1.029-0.041 1.526-0.12l-0.055 0.007zM13.943 22.169c-0.625 0.113-1.344 0.177-2.078 0.177-0.562 0-1.114-0.038-1.656-0.111l0.063 0.007c-0.341-0.044-0.547-0.076-0.753-0.109l0.147 0.020c-0.099-0.016-0.214-0.026-0.331-0.026-0.41 0-0.793 0.115-1.119 0.314l0.009-0.005-2.539 1.531c-0.16 0.1-0.355 0.16-0.564 0.16-0.032 0-0.063-0.001-0.094-0.004l0.004 0c-0.547-0.043-0.975-0.497-0.975-1.052 0-0.029 0.001-0.058 0.004-0.087l-0 0.004 0.2-2.375c0.005-0.052 0.007-0.113 0.007-0.174 0-0.567-0.226-1.081-0.593-1.457l0 0c-0.107-0.109-0.212-0.223-0.313-0.34l-0.008-0.009c-1.272-1.493-2.023-3.336-2.023-5.328 0-4.992 4.716-9.039 10.533-9.039 5.413 0 9.871 3.503 10.467 8.011 4.496 0.204 8.067 3.353 8.067 7.208 0 1.591-0.608 3.061-1.639 4.253-0.068 0.080-0.155 0.173-0.26 0.28-0.297 0.299-0.48 0.711-0.48 1.165 0 0.048 0.002 0.095 0.006 0.142l-0-0.006 0.161 1.897c0.001 0.019 0.002 0.040 0.002 0.062 0 0.447-0.347 0.814-0.786 0.845l-0.003 0c-0.021 0.002-0.047 0.003-0.072 0.003-0.169 0-0.327-0.048-0.461-0.13l0.004 0.002-2.057-1.223c-0.257-0.154-0.567-0.246-0.898-0.246-0.094 0-0.187 0.007-0.278 0.022l0.010-0.001c-0.196 0.031-0.36 0.053-0.491 0.071-0.421 0.053-0.853 0.083-1.292 0.083-3.592 0-6.664-1.877-7.924-4.535zM23.245 23.916c0.203-0.033 0.436-0.052 0.674-0.052 0.561 0 1.097 0.104 1.591 0.294l-0.030-0.010c0.199-0.787 0.59-1.464 1.122-2.003l-0 0c0.067-0.067 0.116-0.12 0.141-0.149 0.652-0.753 0.991-1.617 0.991-2.511 0-2.405-2.537-4.552-5.867-4.552s-5.867 2.147-5.867 4.552 2.537 4.552 5.867 4.552c0.321 0 0.64-0.021 0.952-0.061 0.107-0.013 0.251-0.033 0.427-0.061z"></path></svg>
          <div>微信</div>
        </span>
        <span class="other_login_type">
          <svg xmlns="http://www.w3.org/2000/svg" style="overflow: visible; filter: none;" width="1" height="24"><path d="M 0.5 0 L 0.5 14" stroke="rgba(221,221,221,1)" stroke-width="1px" stroke-dasharray=""></path><path d="M 0.5 0 L 0.5 14" stroke="transparent" stroke-width="10" style="pointer-events: auto;"></path></svg>
        </span>
        <span class="other_login_type">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="24" height="24" style="fill: rgb(16, 16, 16);"><path d="M23.38 16.685l-0.928-2.395c0-0.028 0.013-0.5 0.013-0.744-0.001-4.096-1.871-8.213-6.465-8.213s-6.464 4.117-6.464 8.213c0 0.244 0.012 0.716 0.013 0.744l-0.928 2.395c-0.253 0.687-0.507 1.4-0.689 2.013-0.876 2.919-0.592 4.127-0.376 4.153 0.464 0.057 1.805-2.197 1.805-2.197 0 1.307 0.651 3.011 2.056 4.24-0.525 0.169-1.171 0.427-1.584 0.743-0.373 0.285-0.327 0.575-0.259 0.693 0.293 0.513 5.053 0.327 6.427 0.167 1.373 0.16 6.132 0.347 6.427-0.168 0.067-0.117 0.113-0.407-0.259-0.692-0.415-0.316-1.060-0.573-1.587-0.741 1.407-1.231 2.056-2.936 2.056-4.241 0 0 1.343 2.255 1.807 2.197 0.216-0.027 0.504-1.237-0.377-4.155-0.187-0.617-0.433-1.325-0.688-2.012zM24.741 27.655c-0.497 0.869-1.111 1.189-1.917 1.409-0.32 0.087-0.664 0.144-1.059 0.184-0.587 0.060-1.315 0.087-2.151 0.085-1.276-0.003-2.535-0.059-3.779-0.166l0.166 0.012c-0.923 0.087-2.38 0.152-3.613 0.155-0.068 0.001-0.148 0.001-0.228 0.001-0.677 0-1.347-0.031-2.009-0.093l0.085 0.006c-0.395-0.037-0.755-0.102-1.103-0.194l0.046 0.010c-0.807-0.219-1.42-0.54-1.92-1.412-0.252-0.432-0.4-0.951-0.4-1.505 0-0.247 0.030-0.488 0.086-0.718l-0.004 0.021c-0.789-0.176-1.335-0.644-1.705-1.215-0.177-0.272-0.318-0.587-0.407-0.924l-0.005-0.023c-0.1-0.388-0.158-0.833-0.158-1.292 0-0.064 0.001-0.128 0.003-0.192l-0 0.009c0.017-1.047 0.249-2.349 0.709-3.883 0.187-0.621 0.436-1.344 0.757-2.207l0.737-1.907c-0.001-0.077-0.002-0.172-0.003-0.267v-0.004c0-6.073 3.248-10.88 9.131-10.88 5.884 0 9.131 4.807 9.131 10.88l-0.001 0.271 0.751 1.941c0.3 0.808 0.551 1.537 0.741 2.168 0.464 1.533 0.696 2.839 0.713 3.888 0.009 0.543-0.040 1.035-0.157 1.477-0.088 0.328-0.215 0.64-0.413 0.944-0.368 0.569-0.912 1.035-1.703 1.213 0.173 0.739 0.073 1.52-0.32 2.205z"></path></svg>
          <div>QQ</div>
        </span>
      </div>
    </div>
    <div class="login_bottom">
      <span>登录即同意</span>
      <router-link to="/agree" @click="">用户协议</router-link>
    </div>
  </div>
</template>

<script>
import { Group, XInput, XButton  } from 'vux'
  export default {
    components: { Group, XInput, XButton  },
    methods: {
      login(){
        this.$router.push('/home')
      }
    }
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
      margin-top: 50PX;
      animation: scale 1s;
    }
    @keyframes scale {
      0% {
        transform: scale(0.2);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes slideUp {
      0% {
        transform: translate(0, 50px);
      }
      100% {
        transform: translate( 0, 0);
      }
    }
    .ipt_outer {
      position: relative;
      border-radius: 50px;
      background-color: rgb(245, 245, 245);
      margin: 20px 20px;
      animation: slideUp 1s;
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
    .other_type {
      text-align: center;
      padding-top: 20px;
      .other_login_type {
        display: inline-block;
        width: 40px;
        font-size: 12px;
      }
    }
    .login_bottom {
      position: fixed;
      bottom: 0;
      width: 100%;
      // left: center;
      text-align: center;
      font-family: PingFangSC;
      font-weight: 400;
      font-size: 13px;
      color: rgba(200, 200, 200, 1);
      a {
        color: inherit;
        text-decoration: underline;
      }
    }
    .info {
      font-family: PingFangSC;
      font-weight: 400;
      font-size: 13px;
      color: rgba(200, 200, 200, 1);
      text-align: center;
      height: 40px;
      line-height: 40px;
    }
  }
</style>