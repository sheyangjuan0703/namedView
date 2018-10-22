<template>
  <div class="_content" ref="content">
    <my-slot v-bind:todos="todos">
      <div>默认插槽</div>
      <div>默认插槽1</div>
      <div slot-scope="{todo}" slot="myScopeSlot">作用域插槽：{{todo}}</div>
      <div slot="footer">具名插槽：尾部</div>
    </my-slot>
  </div>
</template>
<script>
import mySlot from '../components/mySlot'
export default {
  data () {
    return {
      todos: this.getData()
    }
  },
  components: {
    mySlot
  },
  mounted () {
    console.log(this.$refs.content)
  },
  computed: {
  },
  methods: {
    getData () {
      return [1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>
<style scoped>
</style>
