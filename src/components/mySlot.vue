<template>
  <div class="_content">
    <header>
      <slot name="header">我是默认插槽的内容</slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo">
        <!-- 我们为每个 todo 准备了一个插槽，-->
        <!-- 将 `todo` 对象作为一个插槽的 prop 传入。-->
        <slot v-bind:todo="todo" name="myScopeSlot">
          <!-- 回退的内容 -->
          {{ todo }}
        </slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['todos'],
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  }
}
</script>
<style scoped>
</style>
