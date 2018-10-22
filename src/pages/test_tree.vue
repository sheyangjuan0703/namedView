<template>
  <!-- 树形结构, 递归组件 -->
  <tree :data='data' ref="myTree"></tree>
</template>
<script>
import axios from 'axios'
import tree from '../components/tree.vue'
export default {
  name: 'testTree',
  data () {
    return {
      data: ''
    }
  },
  components: {
    tree
  },
  watch: {
    data () {
      console.log(this.$refs.myTree)
    }
  },
  created () {
    let self = this
    axios.get('/static/data.json')
      .then(function (response) {
        console.log(response.data)
        self.data = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  computed: {
  }
}
</script>
<style>
</style>
