  var app = new Vue ({
    el: '#app',
    data: {
      message: '2',
      lenMsgOver: 'message over',
      lenMsgUnder: 'msg',
      show: true
    },
    methods: {
      handleClick: function (e) {
        alert(e.target)
      }
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
