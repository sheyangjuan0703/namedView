export default {
  data () {
    return {
      dataList: [
        {check: false, money: 20},
        {check: false, money: 30},
        {check: false, money: 40},
        {check: false, money: 50}
      ],
      tableData: [
        {
          'userId': 'ydy',
          'deviceList': [
            {'deviceId': '102', 'deviceName': 'a2', 'deviceCategory': 'iOS', 'states': 'enable', 'bindingTime': 1528981605078, 'lastLoginTime': 1528981605078, 'bind': true},
            {'deviceId': '100', 'deviceName': 'a0', 'deviceCategory': 'iOS', 'states': 'enable', 'bindingTime': 1528981605003, 'lastLoginTime': 1528981605003, 'bind': true},
            {'deviceId': '101', 'deviceName': 'a1', 'deviceCategory': 'iOS', 'states': 'enable', 'bindingTime': 1528981605057, 'lastLoginTime': 1528981605057, 'bind': true},
            {'deviceId': '103', 'deviceName': 'a3', 'deviceCategory': 'iOS', 'states': 'enable', 'bindingTime': 1528981605093, 'lastLoginTime': 1528981605093, 'bind': true},
            {'deviceId': '104', 'deviceName': 'a4', 'deviceCategory': 'iOS', 'states': 'enable', 'bindingTime': 1528981605104, 'lastLoginTime': 1528981605104, 'bind': true}
          ]
        },
        {
          'userId': 'zs',
          'deviceList': [
            {'deviceId': '105', 'deviceName': 'a5', 'deviceCategory': 'iOS', 'states': 'enable', 'bindingTime': 1528981663440, 'lastLoginTime': 1528981663440, 'bind': true},
            {'deviceId': '100', 'deviceName': 'a0', 'deviceCategory': 'iOS', 'states': 'enable', 'bindingTime': 1528981703495, 'lastLoginTime': 1528981703495, 'bind': true}
          ]
        }
      ]
    }
  },
  mounted () {
    console.log(this.$route.params.id)
  },
  created () {
    console.log(this.$route.params.id)
  },
  computed: {
    sum () {
      let sum = 0
      for (let i = 0; i < this.dataList.length; i++) {
        sum += this.dataList[i].check ? this.dataList[i].money : 0
      }
      return sum
    }
  },
  methods: {
    test1 () {
      console.log('啦啦啦啦')
    }
  }
}
