  var app = new Vue ({
    el: '#app',
    data: {
      message: '2',
      lenMsgOver: 'message over',
      lenMsgUnder: 'msg',
      show: true,
      scroll: 0,
      count: 0,
      timeCount: 0,
      isChild: true,
      isActive: true,
      textColor: 'red',
      bgColor: 'lightgray',
      otherClass: 'none',
      classObject: {
        child: true,
        'is_active': false
      },
      styleObject: {
        color: 'red',
        backgroundColor: 'blue'
      }
    },
    methods: {
      handleClick: function (e) {
        alert(e.target)
      },
      clickIncrement: function () {
        // thisはインスタンス自身、今回はappをさす
        this.count += 1
      },
      timeIncrement: function () {
        vm = this
        // setTimeout(function () { vm.timeCount++ }, 100)
        setTimeout(()=> {this.timeCount++}, 100)
      }
    },
    mounted: function () {
      this.scroll = 100
    }
  })

  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on' + new Date().toLocaleString()
    }
  })
  var app3 = new Vue ({
    el: '#app-3',
    data: {
      seen: false
    }
  })

  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' },
      ]
    }
  })
