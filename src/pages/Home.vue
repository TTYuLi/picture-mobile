<template>
  <div class="home">
    

    <router-view></router-view>
   
  </div>
</template>

<script>
  
  export default {
    
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