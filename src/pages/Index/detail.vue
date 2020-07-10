<template>
  <div class="detail">
    <div class="back">
      <router-link to="/home">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 1024 1024" width="24" height="24" style="fill: rgb(255, 255, 255);"><path d="M872 572H266.8l144.3-183c4.1-5.2.4-13-6.3-13H340c-9.8 0-19.1 4.5-25.1 12.2l-164 208c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
      </router-link>
    </div>
    <div class="more" @click="showShareCard"> 
      <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="24" height="24" style="fill: rgb(255, 255, 255);"><path d="M5.778 13.333c1.227 0 2.222 0.995 2.222 2.222s-0.995 2.222-2.222 2.222c-1.227 0-2.222-0.995-2.222-2.222s0.995-2.222 2.222-2.222zM16 13.333c1.227 0 2.222 0.995 2.222 2.222s-0.995 2.222-2.222 2.222c-1.227 0-2.222-0.995-2.222-2.222s0.995-2.222 2.222-2.222zM26.222 13.333c1.227 0 2.222 0.995 2.222 2.222s-0.995 2.222-2.222 2.222c-1.227 0-2.222-0.995-2.222-2.222s0.995-2.222 2.222-2.222z"></path></svg>
    </div>
    <img class="bg" src="/static/images/detail/detail1.jpg" alt="">
    <!-- 主页卡片模块 -->
    <!-- <transition name="card"> -->
      <div :class="{card: true, animate: slideToggle, animateBack: animateBack}" v-if="isVisibleHomeCard" @click="toggleFade" >
        <div class="widget">
          <span> </span>
        </div>
        <div class="avator" @click.stop="toHomePage">
          <img src="/static/images/detail/avator1.png" alt="">
          <span class="name">倾听他的故事</span>
          <span class="works">他的作品</span>
        </div>
        <div class="article">
          <div class="title"> 生活需要一杯美好  <span class="tag"> # 咖啡</span> </div>
          <p>你看，尽管我们说着生活有多不如意，这即将过去的一年有多糟糕，可是每个人都在为下一年而努力，期待着亮丽的明天。</p>
          <div class="extra">
            <div class="downLoad"> 
              <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="64 64 896 896" width="18" height="18" style="fill: rgb(16, 16, 16);"><path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg>
              <div>24</div>
            </div>
            <div class="favor"> 
              <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="64 64 896 896" width="18" height="18" style="fill: rgb(16, 16, 16);"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>
              <div>65</div>
            </div>
            <div class="share">
              <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="64 64 896 896" width="18" height="18" style="fill: rgb(16, 16, 16);"><path d="M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 0 0 0-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"></path></svg>
              <div>17</div>
            </div>
          </div>
          <div class="action">
            <div class="collection" @click.stop="showCollection" :style="{ background: collected? 'rgb(255, 0, 0)' : 'rgb(45, 45, 45)'}">
              <transition name="scale">
              <svg v-if="collected" xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="64 64 896 896" width="24" height="24" style="fill: rgb(255, 255, 255);"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="64 64 896 896" width="24" height="24" style="fill: rgb(255, 255, 255);"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>
              </transition>
            </div>
            <div class="downLoad">下载壁纸 </div>
          </div>
        </div>
      </div>
    <!-- </transition> -->
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
      <!-- 收藏卡片模块 -->
     <div class="collect_card_modal" v-if="isVisibleCollectCard">
       <div class="collect_card" @click="collect_click">
          <div class="title">请选择收藏的位置</div>
          <div class="close" @click="hideCollection">
            <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 32 32" width="20" height="20" style="fill: rgb(16, 16, 16);"><path d="M16 14.115l6.6-6.6 1.885 1.885-6.6 6.6 6.6 6.6-1.885 1.885-6.6-6.6-6.6 6.6-1.885-1.885 6.6-6.6-6.6-6.6 1.885-1.885z"></path></svg>
          </div>
          <div class="capital">
            <p v-for="item in capitals" :key="item"> {{item}}</p>
          </div>
          <div class="collect_card_item">
            <img src="/static/images/detail/type_avator.jpg" alt="">
            <div >
              <div class="title">咖啡生活</div>
              <div>Website Back</div>
            </div>
          </div>
          <div class="collect_list">
            <div class="title">最近收藏</div>
            <p>风景壁纸</p>
            <p>动物壁纸</p>
            <p>可爱壁纸</p>
            <p>手绘壁纸</p>
            <p>风景壁纸</p>
          </div>

       </div>
     </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        slideToggle: false,
        animateBack: false,
        isVisibleHomeCard: true,
        isVisibleShareCard: false,
        isVisibleCollectCard: false,
        capitals: ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        collected: false
      }
    },
    methods: {
      toHomePage(){
        this.$router.push('/homePage')
      },
      showCollection(){
        // 显示分享卡片
        if(this.collected){
          this.collected = false
        } else {
          console.log(this.isVisibleHomeCard, 'this.isVisibleHomeCard')
          this.isVisibleCollectCard = true
          // this.isVisibleShareCard = false
          // this.isVisibleHomeCard = true
        }
      },
       hideCollection(){
        // 影藏收藏卡片
        this.isVisibleCollectCard = false
        // this.isVisibleHomeCard = true
      },
      collect_click(){
        this.collected = true
        this.isVisibleCollectCard = false
      //  this.isVisibleHomeCard = true
      },
      toggleFade(){
        // this.isVisibleHomeCard = !this.isVisibleHomeCard
        this.slideToggle = !this.slideToggle
        this.animateBack =  !this.slideToggle
      },
      showShareCard(){
        // 显示分享卡片
        this.isVisibleShareCard = true
        this.isVisibleHomeCard = false
      },
      hideShareCard(){
        // 取消分享卡片
        this.isVisibleShareCard = false
        this.isVisibleHomeCard = true
      }
    },
    created(){}
  }
</script>

<style lang="less" scoped>
  .detail {
    position: relative;
    .back {
      display: inline-block;
      padding: 20px 20px;
    }
    .more {
      position: fixed;
      display: inline-block;
      padding:10px;
      right: 10px;
      top: 20px;
      z-index: 4;
    }
    .bg {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }
    .card {
      // display: none;
      background: #fff;
      border-radius: 40px 40px 0 0;
      position: fixed;
      bottom: 0;
      z-index: 3;
      height: 370px;
      padding: 15px 30px;
      animation: bounce-in 1s;
      &.animate {
        animation: slide 0.5s;
      }
      &.animateBack {
        //  animation: slide 0.5s reverse;
        animation: slide_back 1s;
      }
      .widget {
        text-align: center;
        span {
          width: 30px;
          height: 4px;
          display: inline-block;
          background-color: rgb(221, 221, 221);
          border-radius: 50px;
        }
      }
      .avator {
        position: relative;
        margin: 15px 0px;
        img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          vertical-align: middle; 
          margin-right: 20px;
          
        }
        .name {
          vertical-align: middle;
          font-family: PingFangSC;
          font-weight: 700;
          font-size: 16px;
          color: rgb(16, 16, 16);
        }
        .works {
          position: absolute;
          right: 0px;
          top: 10px;
          background-color: rgb(244, 244, 244);
          color: rgb(16, 16, 16);
          border-radius: 50px;
          font-size: 12px;
          text-align: center;
          padding: 5px 12px;
          // float: right;
        }
      }
      .article {
        .title {
          font-family: PingFangSC;
          font-weight: 700;
          font-size: 22px;
          color: rgb(16, 16, 16);
          line-height: 32px;
          span.tag {
            // display: inline-block;
            // position: absolute;
            font-weight: normal;
            background-color: rgb(244, 244, 244);
            color: rgb(208, 208, 208);
            border-radius: 50px;
            font-size: 12px;
            padding: 2px 8px;
            // float: right;
            // text-align: center;
          }
        }
        p {
          font-family: PingFangSC;
          font-weight: 700;
          font-size: 14px;
          color: rgb(16, 16, 16);
          line-height: 26px;
          margin-top: 10px;
        }
        .extra {
          display: flex;
          margin: 20px 0;
          &>div {
            flex: 1;
            text-align: center;
            font-size: 12px;
          }
        }
        .action {
          display: flex;
          background-color: rgb(16, 16, 16);
          border-radius: 50px;
          height: 54px;
          line-height: 54px;
          .collection {
            flex: 1;
            background-color: rgb(45, 45, 45);
            text-align: center;
            border-radius: 50px 0 0 50px;
            svg {
              margin-top: 14px;
            }
          }
          .downLoad {
            flex: 3;
            color: #fff;
            text-align: center;
            font-weight: bold;
            font-size: 14px;
          }
        }

      }
    }
    .share_card {
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
    .collect_card_modal {
      position: fixed;
      top: 0; 
      right: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(16, 16, 16, 0.4);
      z-index: 33;
      animation: fade-in 1s;
      .collect_card {
        overflow: hidden;
        position: relative;
        background-color: #fff;
        // height: 400px;
        width: 70%;
        margin: 100px auto;
        border-radius: 14px;
        padding: 15px;
        animation: rotate-in 1s;
        transform-origin: left bottom;
        .close {
          display: inline-block;
          position: absolute;
          top: 15px;
          right: 15px;
        }
        .title {
          font-size: 14px;
          color: rgb(16, 16, 16);
          font-weight: bold;
        }
        .capital {
          display: inline;
          position: absolute;
          right: 15px;
          top: 56px;
          font-family: PingFangSC;
          font-weight: 400;
          font-size: 8px;
          color: rgb(200, 200, 200);
          p {
            line-height: 11px;
            text-align: center;
          }
        }
        .collect_card_item {
          margin: 20px 0;
          font-family: PingFangSC;
          font-weight: 400;
          font-size: 12px;
          color: rgb(223, 223, 223);
          .title {
            font-size: 14px;
            color: rgb(16, 16, 16);
            font-weight: bold;
          }
          img {
            width: 50px;
            border-radius: 8px;
            margin-right: 10px;
          }
          &>div {
            display: inline-block;
            vertical-align: top;
          }

        }
        .collect_list {
          font-family: PingFangSC;
          font-weight: 700;
          font-size: 13px;
          color: rgba(16, 16, 16, 1);
          .title {
            font-weight: 400;
            font-size: 11px;
            color: rgba(200, 200, 200, 1);
            margin-bottom: 10px;
          }
          p {
            height: 38px;
          }
        }
      }
    }
    .bounce-enter-active {
      animation: bounce-in 1s;
    }
    // .bounce-leave-active {
    //   animation: bounce-in .5s reverse;
    // }
    @keyframes bounce-in {
      0% {
        transform: translate(0, 100%);
      }
      100% {
         transform: translate(0, 0);
      }
    }

    // 分享卡片 动态样式
    .card-enter-active {
      animation: card-in 1s;
    }
    // .card-leave-active {
    //   animation: card-in .5s reverse;
    // }
    @keyframes card-in {
      0% {
        transform: translate(0, 100%);
      }
      100% {
         transform: translate(0, 0);
      }
    }

    // 点击主页 上下滑动
    @keyframes slide {
      0% {
        transform: translate(0, 0);
      }
      100% {
         transform: translate(0, 80%);
      }
    }


    // 收藏卡片 动画效果
    .rotate-enter-active {
      animation: rotate-in 1s;
    }
    .rotate-leave-active {
      animation: rotate-in .5s reverse;
    }
    @keyframes rotate-in {
    0% {
      transform: rotate(-30deg);
    }
    100% {
        transform: rotate(0);
    }

  }
  // 主页的动画效果
  .fade-enter-active {
    animation: fade-in 1s;
  }
  .fade-leave-active {
    animation: fade-in .5s reverse;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }  




}
</style>