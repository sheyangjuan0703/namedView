<template>
  <div class="hello">
    地图
    <div id="container"></div>
  </div>
</template>

<script>
import BMap from 'BMap'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: 'none'
    }
  },
  mounted () {
    this.ready()
  },
  components: {
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
    ready: function () {
      var map = new BMap.Map('container')
      var point = new BMap.Point(116.404, 39.915)
      map.centerAndZoom(point, 12)

      var geolocation = new BMap.Geolocation()
      geolocation.enableSDKLocation()
      geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() === window.BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point)
          map.addOverlay(mk)
          map.panTo(r.point)
          console.log('您的位置：' + r.point.lng + ',' + r.point.lat)
        } else {
          alert('failed' + this.getStatus())
        }
      })
      // var map = new BMap.Map('allmap')
      // var point = new BMap.Point(104.075796, 30.659684)
      // map.centerAndZoom(point, 14)
      // map.addControl(new BMap.MapTypeControl())
      // map.enableScrollWheelZoom(true)
      // map.enableDoubleClickZoom(true)
      // var marker = new BMap.Marker(point)
      // map.addOverlay(marker)
    }
  }
}
</script>

<style scoped>
#container{height:300px}
</style>
