<template>
  <div class="hello">
    我是菜单{{ $route.params.index}}的内容
    <table>
      <thead>
        <tr>
          <td>序号</td>
          <td>描述</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="x in 10" :key="x">
          <td>{{x}}</td>
          <td>我是列表</td>
          <td>
            <router-link :to="{ name: 'detail', params: { index: $route.params.index,detailIndex:x }}">查看详情</router-link>
            <router-link :to="{ name: 'detailNoMenu', params: { index: $route.params.index,detailIndex:x }}">我不要头部和菜单</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.menuItem{
  height: 30px;
  list-style: none;
}
table{width: 100%}
</style>
