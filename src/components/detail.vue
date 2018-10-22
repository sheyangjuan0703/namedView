<template>
  <div class="hello">
    我是菜单{{$route.params.index}}的详情{{$route.params.detailIndex}}
    <!-- <div id="video" style="width: 300px; height: 200px;" width='200' ref="video"></div> -->
    <div @click="changeShow">按钮</div><span v-bind:style="{display:show}" ref='myText'>我出现了</span>
    <el-table
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        type="index"
        :index = "indexMethod"
        width="50">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        >
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="180"
        :formatter="formatSex"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="180">
      </el-table-column>
      <!-- 渲染html的列 -->
      <el-table-column label="地址">
          <template slot-scope="scope">
              <div v-html="scope.row.address"></div>
          </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(indexMethod(scope.$index), scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(indexMethod(scope.$index), scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        focus>
      </el-date-picker>
    </div>
    <ul ref='myUl'>
      <li @click="toTest">给唐雨的demo</li>
      <li><router-link :to="'/test/'+1">给唐雨的demo</router-link></li>
      <li><router-link to="/test_vuex">test_vuex</router-link></li>
      <li><router-link to="/test_tree">树形结构</router-link></li>
      <li><router-link to="/test_slot">slot</router-link></li>
      <li><router-link to="/test_demo">三千的问题</router-link></li>
    </ul>
    <table class="tableHeader">
      <tr>
        <th>字母排序</th>
        <th>品牌</th>
        <th>厂商</th>
        <th>车系</th>
      </tr>
    </table>
    <table class="table">
      <tr v-for="(item, index) in carData" :key="index">
        <td>{{item.label}}</td>
        <td>
            <table class="table2">
              <tr v-for="(item2, index2) in item.children" :key="index2"  draggable="true" @dragstart.stop="drag($event,index2,item.label)" @drop.stop="drop($event,item.children ,index2,item.label)" @dragover="dragover" @dragleave="dragleave">
                <td v-if="item2.label">{{item2.label}}</td>
                <td>
                  <table class="table3">
                    <tr v-for="(item3, index3) in item2.children" :key="index3" draggable="true" @dragstart.stop="drag($event,index3,item2.label)" @drop.stop="drop($event,item2.children ,index3,item2.label)" @dragover="dragover" @dragleave="dragleave">
                      <td v-if="item3.label">{{item3.label}}</td>
                      <td>
                        <table  class="table4">
                          <tr v-for="(item4, index4) in item3.children" :key="index4" draggable="true" @dragstart.stop="drag($event,index4,item3.label)" @drop.stop="drop($event,item3.children ,index4,item3.label)" @dragover="dragover" @dragleave="dragleave">
                            <td v-if="item4.label">{{item4.label}}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// import Ckplayer from 'ckplayer'
import draggable from 'vuedraggable'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: 'none',
      tableData: [{
        myIndex: 6,
        date: '2016-05-02',
        name: '王小虎',
        address: '<i>上海市普陀区金沙江路 1518 弄</i>',
        sex: 1
      }, {
        myIndex: 7,
        date: '2016-05-04',
        name: '审理后',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: 1
      }, {
        myIndex: 8,
        date: '2016-05-01',
        name: '的来看是',
        address: '上海市普陀区金沙江路 1519 弄',
        sex: -1
      }, {
        myIndex: 9,
        date: '2016-05-03',
        name: '多可爱建档立卡',
        address: '上海市普陀区金沙江路 1516 弄',
        sex: 0
      }],
      formThead: ['id', 'ontractName', 'customerName'],
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      value1: '',
      value2: '',
      carData: [
        {
          label: 'A',
          children: [ // 品牌
            {
              label: 'A - 奥迪',
              children: [ // 厂商
                {
                  label: '一汽大众奥迪',
                  children: [ // 车系
                    {
                      label: '100'
                    },
                    {
                      label: '200'
                    },
                    {
                      label: 'A4L'
                    },
                    {
                      label: 'A6L'
                    },
                    {
                      label: 'Q5'
                    }
                  ]
                },
                {
                  label: '奥迪进口',
                  children: [ // 车系
                    {
                      label: 'A3'
                    },
                    {
                      label: 'A5'
                    },
                    {
                      label: 'S5'
                    },
                    {
                      label: 'S8'
                    }
                  ]
                }
              ]
            },
            {
              label: 'ARCFOX',
              children: [ // 厂商
                {
                  label: '北汽新能源',
                  children: [ // 车系
                    {
                      label: 'LITE'
                    }
                  ]
                },
                {
                  label: '北汽新能源2',
                  children: [ // 车系
                    {
                      label: 'LITE2'
                    }
                  ]
                }
              ]
            },
            {
              label: '安驰',
              children: [ // 厂商
                {
                  label: '江淮安驰',
                  children: [ // 车系
                    {
                      label: '威豹'
                    },
                    {
                      label: '雪豹'
                    },
                    {
                      label: '小公主'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: 'B',
          children: [ // 品牌
            {
              label: '别克',
              children: [ // 厂商
                {
                  label: '上汽通用别克',
                  children: [ // 车系
                    {
                      label: 'GL8'
                    }
                  ]
                }
              ]
            }
          ]
        }

      ]
    }
  },
  mounted () {
    console.log(this.$refs.myUl)
    // console.log(Ckplayer)
    this.$nextTick(function () {
      // let videoObject = {
      //   container: '#video', // 容器的ID或className
      //   variable: 'player', // 播放函数名称
      //   loaded: 'loadedHandler', // 当播放器加载后执行的函数
      //   autoplay: true, // 是否自动播放
      //   playerType: 'html5video',
      //   poster: 'https://catch.tuhu.cn/project/syj_project_3/static/img/banner01.139196e.png', // 封面图片
      //   debug: true, // 是否开启调试模式
      //   drag: 'start', // 拖动的属性
      //   live: false, // 是否是直播
      //   seek: 0, // 默认跳转的时间
      //   video: 'http://img.ksbbs.com/asset/Mon_1703/d30e02a5626c066.mp4'
      // }
      // var player = new Ckplayer(videoObject)
      // console.log(player)
    })
  },
  components: {
    draggable
  },
  beforeRouteEnter (to, from, next) {
    console.log(111)
    next()
  },
  watch: {
    tableData (val) {
      console.log(val)
    }
    // tableData: {
    //   handel: function (oldVal, newVal) {
    //     console.log(oldVal, newVal)
    //   },
    //   deep: true
    // }
  },
  methods: {
    changeShow () {
      // console.log('点击', this.$refs.video.style.width, this.$refs.myUl.children[1])
      // this.show = 'block'
      // this.tableData[0] = this.tableData[1]
      this.formThead = ['customerName', 'id', 'ontractName']
    },
    indexMethod (index) {
      return index + 10
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    toTest () {
      this.$router.push({name: 'test'})
    },
    formatSex: function (row, column) {
      return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知'
    },
    handleSelectionChange (val) {
      console.log(val)
    },
    drag (e, index, moudle) {
      e.dataTransfer.setData('index', index)
      e.dataTransfer.setData('moudle', moudle)
    },
    dragover (e) {
      console.log(e.target)
      if (e.target.localName === 'td') {
        e.target.parentNode.style = 'background:#ebf7ff'
      }
      e.preventDefault()
    },
    dragleave (e) {
      e.target.parentNode.style = 'background:#00000000'
    },
    drop (e, item, nowIndex, nowMoudle) {
      let index = Number(e.dataTransfer.getData('index'))
      let moudle = e.dataTransfer.getData('moudle')
      let itemData = item[index]
      if (moudle === nowMoudle) {
        item.splice(index, 1)
        item.splice(nowIndex, 0, itemData)
      }
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
.menuItem{
  height: 30px;
  list-style: none;
}
</style>
<style scoped>
  .el-picker-panel{
    z-index: 2007;
    position: absolute;
    top: 6px;
    left: 387px;
    display: block !important;
  }
  .tableHeader{
    background: #d0d0d0;
  }
  .tableHeader th{
    min-width: 200px;
    padding: 0!important;
  }
  .table,.table2,.table3,.table4{
    border-collapse:collapse;
    border-spacing:0;
  }
  td{
    min-width: 200px;
    padding: 0!important;
  }
  tr{
    display: block;
    padding: 0!important;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
  }
  tr:last-child{
    border-bottom: 0;
  }
  .table4 tr {
    border-right: 1px solid #000;
  }
  .table>tr:first-child {
    border-top: 1px solid #000;
  }
  .table>tr:last-child {
    border-bottom: 1px solid #000;
  }
</style>
