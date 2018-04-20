<template>
  <div class="hello">
    <ul>
      <li class="menuItem" v-for="x in 10" :key="x"><router-link :to="{ name: 'list', params: { index: x }}">我是菜单{{x}}</router-link></li>
    </ul>
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
