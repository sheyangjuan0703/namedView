<template>
  <!-- 树形结构, 递归组件 -->
  <ul class="_content">
    <li v-for="(item, index) in data" :key="index">
      <input type="checkbox" name="check"  v-model="item.buttonControl" />{{item.menuLevel}}-{{item.menuName}}
      <tree :data="item.childNode" v-show="item.buttonControl"></tree>
    </li>
  </ul>
</template>
<script>
import tree from './tree.vue'
export default {
  name: 'tree',
  props: ['data'],
  data () {
    return {
    }
  },
  components: {
    tree
  }
}
</script>
<style scoped>
._content ul{
  overflow: hidden;
}
._content li{
  list-style: none;
  text-align: left;
  margin-left: 20px;
}
</style>
