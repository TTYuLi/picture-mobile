<template>
  <div class="home">
    

    <router-view></router-view>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import bottomNav from '../components/bottom-nav'
 import { XInput, Grid, GridItem } from 'vux'
  export default {
    components: {XInput, Grid, GridItem , bottomNav},
    methods: {
      to_search(){
        this.$router.push('/search')
      }
    }
  }
</script>

<style lang="less" scoped>
  .home {
     
  }

</style>