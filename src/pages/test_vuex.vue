<template>
  <div class="hello">
    <div>
      <button @click="$store.commit('add',10)">+</button>
        {{count}}
      <button @click="dis">-</button>
    </div>
  </div>
</template>

<script>
// import Ckplayer from 'ckplayer'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: 'none'
    }
  },
  created () {
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
  },
  methods: {
    changeShow () {
      console.log('点击')
      this.show = 'block'
    },
    ...mapMutations(['add', 'dis'])
  }
}
</script>

<style scoped>
.menuItem{
  height: 30px;
  list-style: none;
}
</style>
