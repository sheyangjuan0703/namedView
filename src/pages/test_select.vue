<template>
  <div class="_content">
    <ul>
      <li v-for="(item, index) in dataList" :key="index">
        <template>
          <el-select v-model="item.lable" placeholder="请选择" :remote-method="remoteMethod" :loading="loading">
            <el-option
              v-for="(item, index) in options"
              :key="index"
              :value="item.lable">
            </el-option>
          </el-select>
        </template>
        <span v-if="!index" @click="add">增加课件</span>
        <span v-else @click="del(index)">删除课件</span>
      </li>
    </ul>
    <div class="text">
      选择好的数据：{{dataList}}<br/>
      下拉框的数据：{{options}}
    </div>
    <el-select
      v-model="value9"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading">
      <el-option
        v-for="item in options4"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataList: [
        {lable: '数学'},
        {lable: '语文'},
        {lable: '英语'},
        {lable: '计算机'}
      ],
      options: [
        {lable: '数学'},
        {lable: '语文'},
        {lable: '英语'},
        {lable: '计算机'},
        {lable: 'C#'},
        {lable: 'java'},
        {lable: 'python'}
      ],
      options4: [],
      value9: [],
      list: [],
      loading: false,
      states: ['Alabama', 'Alaska', 'Arizona',
        'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida',
        'Georgia', 'Hawaii', 'Idaho', 'Illinois',
        'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana',
        'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas',
        'Utah', 'Vermont', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin',
        'Wyoming']
    }
  },
  created () {
    this.list = this.states.map(item => {
      return { value: item, label: item }
    })
  },
  methods: {
    add () {
      this.dataList.push({lable: ''})
    },
    del (index) {
      this.dataList.splice(index, 1)
    },
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options4 = []
      }
    }
  }
}
</script>
<style scoped>
._content ul{
  overflow: hidden;
}
/* ._content ul li{
  float: left;
  width: 50%;
  list-style: none;
} */
.text{
  text-align: left
}
</style>
