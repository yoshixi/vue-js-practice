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
      },
      item: {
        id: 1,
        src: 'item1.jpg',
        alt: 'thumbnail content',
        width: '200px',
        height: 200,
      },
      radius: 50
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

  var app9 = new Vue({
    el: '#app9',
    data: {
      ok: false
    }
  })

  var app10 = new Vue({
    el: '#app10',
    data: {
      list: [
        {id: 1, name: 'slime',   hp: 100},
        {id: 2, name: 'gobline', hp: 200},
        {id: 3, name: 'dragon',  hp: 300}
      ]
    }
  })

  var app2 = new vue({
    el: '#app-2',
    data: {
      message: 'you loaded this page on' + new date().tolocalestring()
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
