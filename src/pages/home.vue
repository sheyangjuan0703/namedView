<template>
  <!-- 上下布局  -->
  <div id="home">
    <router-view class="view header" name="header"/>
    <!-- 左右布局 -->
    <div class="flex_left_right">
      <router-view class="view menu" name="menu"></router-view>
      <router-view class="view content" name="content"></router-view>
    </div>
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$router.options.routes.forEach((item, index) => {
      // console.log(item, index)
    })
  }
}
</script>

<style scoped>
#home {
  height: 100%;
  display: flex;
  flex-flow: column;
}
#home .header{width:100%;height:100px;background-color:palevioletred;}
.flex_left_right{
  display: flex;
  flex: 1;
}
.flex_left_right .menu{width:200px;height:100%;background-color:paleturquoise;}
.flex_left_right .content{height:100%;background-color:palegoldenrod;flex: 1;}
</style>
