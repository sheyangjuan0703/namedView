<template>
  <!-- 给唐雨的demo -->
  <div class="_content">
    <ul>
      <li v-for="(item, index) in dataList" :key="index" @click="test1">
        <input type="checkbox" name="check"  v-model="item.check" />{{item.money}}元
      </li>
    </ul>
    总价：{{sum}}元<br/>
    <img src="http://www.w3school.com.cn/i/eg_smile.gif" height="200"/>
    <table class="table">
      <tr v-for="(item,index) in tableData" :key="index">
        <td>
          {{item.userId}}
        </td>
        <td>
          <table>
            <tr v-for="(device,index) in item.deviceList" :key="index" >
              <td>
                {{device.deviceId}}
              </td>
              <td>
                {{device.deviceName}}
              </td>
              <td>
                {{device.deviceCategory}}
              </td>
              <td>
                {{device.states}}
              </td>
              <td>
                {{device.bindingTime}}
              </td>
              <td>
                {{device.lastLoginTime}}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import test from './testJs.js'
export default test
// export default {
//   data () {
//     return {
//       dataList: [
//         {check: false, money: 20},
//         {check: false, money: 30},
//         {check: false, money: 40},
//         {check: false, money: 50}
//       ]
//     }
//   },
//   created () {
//     console.log(this.$route.params.id)
//   },
//   computed: {
//     sum () {
//       let sum = 0
//       for (let i = 0; i < this.dataList.length; i++) {
//         sum += this.dataList[i].check ? this.dataList[i].money : 0
//       }
//       return sum
//     }
//   },
//   methods: {
//     test1 () {
//       console.log('啦啦啦啦')
//     }
//   }
// }
</script>
<style scoped>
._content ul{
  overflow: hidden;
}
._content ul li{
  float: left;
  width: 50%;
  list-style: none;
}
.table{
  width: 100%;
}
</style>
