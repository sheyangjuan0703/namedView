<template>
  <div class="timer">
    <el-date-picker type="datetime" placeholder="请选择开始时间" v-model="reportStartTime" v-if="hackReset">
    </el-date-picker>
    <span>-</span>
    <el-date-picker type="datetime" placeholder="请选择结束时间" v-model="reportEndTime"   v-if="hackReset">
    </el-date-picker>
    <ul class="timeList">
      <li :class="{active:isActive===index}" @click="chooseTime(index)" v-for="(item,index) in dataArr" :key="index">{{item}}</li>
    </ul>
    <hr/>
    <div>最新数据：{{reportStartTime}}----{{reportEndTime}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isActive: '',
      dataArr: ['今天', '一个月', '三个月', '一年', '清空'],
      reportStartTime: null, // 申报开始时间
      reportEndTime: null, // 申报结束时间
      hackReset: true
    }
  },
  watch: {
    reportEndTime (val) {
      console.log(11, val)
    }
  },
  methods: {
    chooseTime (index) {
      this.isActive = index
      let num = ''
      if (index === 0) {
        num = 0
      } else if (index === 1) {
        num = 30
      } else if (index === 2) {
        num = 90
      } else if (index === 3) {
        num = 365
      } else if (index === 4) {
        this.reportStartTime = null // 修改数据
        this.reportEndTime = null // 修改数据
        this.hackReset = false
        this.$nextTick(() => {
          this.hackReset = true
        })
        return
      } else {
        return
      }
      let getTime = new Date().getTime()
      this.reportStartTime = new Date(getTime - (+1000 * 60 * 60 * 24 * (num)) - ((new Date().getHours() * 60 * 60 + new Date().getMinutes() * 60 + new Date().getSeconds()) * 1000))
      if (index === 0) {
        this.reportStartTime = new Date(getTime - ((new Date().getHours() * 60 * 60 + new Date().getMinutes() * 60 + new Date().getSeconds()) * 1000))
      }
      this.reportEndTime = new Date() // 修改数据
      this.hackReset = false
      this.$nextTick(() => {
        this.hackReset = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped css="less">
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .timeList {
    margin-left: 20px;
  }
  li {
    width: 60px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    margin-right: 30px;
    background-color: #fff;
    text-align: center;
  }
  li:hover {
    cursor: pointer;
  }
  .active {
    color: #fff;
    background-color: #ef462f;
  }
  .timer{
    align-items: center;
    justify-content: center;

  }
  span{
    margin: 0 10px;
  }
</style>
