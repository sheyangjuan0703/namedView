<template>
  <!-- 给叁千的demo -->
  <div class="_content" :style="'height:' + 200 +'px'">
    当前心数：{{remainderHeart}}
    <div class="gift-list" v-for="(giftLevelItem, index1) in giftData" :key="index1">
      <div class="head">{{giftLevelItem.giftLevel}}</div>
      <div class="item">
        <div  v-for="(item, index2) in giftLevelItem.giftList" :key="index2" @click="checkedOne (item)">
            <label :class="{'Checked':item.disabled}" class="title">
              <input
              :id="item.Id" type="checkbox"
              :value="item.Id" v-model="giftListId"
              :disabled="!item.disabled" >
                {{item.desc}}</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      giftData: [{
        giftLevel: '白银级',
        giftLevelId: 5,
        giftList: [
          {desc: '飞利浦电动牙刷', Id: 1, disabled: false, LevelId: 5},
          {desc: '安克充电宝', Id: 2, disabled: false, LevelId: 5},
          {desc: '雷蛇键鼠套装', Id: 3, disabled: false, LevelId: 5},
          {desc: '小米AI小爱音响', Id: 4, disabled: false, LevelId: 5}
        ]
      }, {
        giftLevel: '黄金级',
        giftLevelId: 10,
        giftList: [
          {desc: '希捷移动硬盘', Id: 5, disabled: false, LevelId: 10},
          {desc: '特洛无人机', Id: 6, disabled: false, LevelId: 10},
          {desc: '斐珞尔洁面仪', Id: 7, disabled: false, LevelId: 10},
          {desc: '小米空气净化器', Id: 8, disabled: false, LevelId: 10}
        ]
      }, {
        giftLevel: '铂金级',
        giftLevelId: 15,
        giftList: [
          {desc: 'Apple AirPods耳机', Id: 9, disabled: false, LevelId: 15},
          {desc: '米家扫地机器人', Id: 10, disabled: false, LevelId: 15},
          {desc: 'ReFa 美容仪', Id: 11, disabled: false, LevelId: 15},
          {desc: '索尼蓝牙耳机', Id: 12, disabled: false, LevelId: 15}
        ]
      }, {
        giftLevel: '钻石级',
        giftLevelId: 20,
        giftList: [
          {desc: '佳能单反套机', Id: 13, disabled: false, LevelId: 20},
          {desc: '戴森吸尘器', Id: 14, disabled: false, LevelId: 20},
          {desc: '极米投影机', Id: 15, disabled: false, LevelId: 20},
          {desc: '华为P20', Id: 16, disabled: false, LevelId: 20}
        ]
      }, {
        giftLevel: '至尊级',
        giftLevelId: 25,
        giftList: [
          {desc: '大疆无人机', Id: 17, disabled: false, LevelId: 25},
          {desc: 'Apple MacBook', Id: 18, disabled: false, LevelId: 25},
          {desc: 'Apple iPad Pro 平板电脑', Id: 19, disabled: false, LevelId: 25},
          {desc: 'iPhone X', Id: 20, disabled: false, LevelId: 25}
        ]
      }],
      giftListId: [], // 兑换礼物id
      remainderHeart: 5 // 剩余爱心数
    }
  },
  created () {
    this.check()
  },
  computed: {
    giftLevel () {
      var Level = ''
      var Num = this.CurrentStarts
      if (Num >= 25) {
        Level = '至尊'
      } else if (Num >= 20) {
        Level = '钻石'
      } else if (Num >= 15) {
        Level = '铂金'
      } else if (Num >= 10) {
        Level = '黄金'
      } else if (Num >= 5) {
        Level = '白银'
      }
      return Level
    }
  },
  methods: {
    checkedOne (item) {
      if (this.giftListId.indexOf(item.Id) < 0) { // 选中
        this.giftListId.push(item.Id)
        this.remainderHeart = this.remainderHeart - item.LevelId
      } else { // 取消选中
        this.giftListId.splice(this.giftListId.indexOf(item.Id), 1)
        this.remainderHeart = this.remainderHeart + item.LevelId
      }
      this.check()
    },
    check () {
      this.giftData.map((giftItem) => {
        if (giftItem.giftLevelId <= this.remainderHeart) { // 初始化可选状态, 可选
          giftItem.giftList.map((listItem) => {
            listItem.disabled = true
          })
        } else { // 不可选
          giftItem.giftList.map((listItem) => {
            listItem.disabled = this.giftListId.indexOf(listItem.Id) > -1
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.head{background-color: #f00;color: #fff}
.title{color: #999}
.title.Checked{color: #02a}
</style>
