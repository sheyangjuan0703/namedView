<template>
    <div>
        <el-table
                :data="tableData"
                stripe
                style="width: 100%" v-if="mark">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>

            <el-table-column :key='fruit' v-for='fruit in formThead' :label="fruit" >
                <template slot-scope="scope">
                    {{scope.row[fruit]}}
                </template>
            </el-table-column>

        </el-table>

        <el-button @click="test" type="primary" size="small"
                   style="margin-top: 10px;margin-bottom: 5px">
            <i style="margin-right: 5px" class="el-icon-circle-plus-outline"></i>新增项目
        </el-button>
        {{formThead}}
    </div>

</template>

<script>
export default {
  data () {
    return {
      mark: true,
      formThead: ['date', 'name', 'address'],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    test () {
      this.formThead = ['name', 'date', 'address']
      this.mark = false
      this.$nextTick(function () {
        this.mark = true
      })
    }
  }
}
</script>
