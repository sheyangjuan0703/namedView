<template>
  <div class="hello">
    我是菜单{{$route.params.index}}的详情{{$route.params.detailIndex}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.menuItem{
  height: 30px;
  list-style: none;
}
</style>
