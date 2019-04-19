/**
 * 
 * @param {Date} start
 * @param {Date} end
 */
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var getDateArray = function(start, end) {
  var arr = new Array();
  var dt = new Date(start);
  while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
  }
  return arr;
}

function randomInterval(interval) {
  var date = new Date();
  // make array of all dates in current month
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  var dates = getDateArray(firstDay, lastDay)
  // loop over them and "flip a coin" for each day to keep/remove
  for (i=0 ; i<dates.length; i = i + interval) {
    if (Math.floor(Math.random() * 2) == 0) {
      dates.splice(i,interval)
    }
  }
  return dates
}


new Vue({
  el: '#app',
  components: {
    'vueSlider': window[ 'vue-slider-component' ],
  },
  data: {
    // Data used by the date picker
    mode: 'single',
    value: 1,
    calDates: [],
    attrs: [
      {
        key: 'today',
        highlight: {
          backgroundColor: '#ff8080',
          // Other properties are available too, like `height` & `borderRadius`
        },
        dates: randomInterval(1)
      }
    ],
  },
  methods: {
    randomInterval: function(interval) {
      var date = new Date();
      // make array of all dates in current month
      var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      var dates = getDateArray(firstDay, lastDay)
      // loop over them and "flip a coin" for each day to keep/remove
      for (i=0 ; i<dates.length; i = i + interval) {
        if (Math.floor(Math.random() * 2) == 0) {
          dates.splice(i,interval)
        }
      }
      console.log("ran method randomint")
      // cons
      this.calDates = dates
      return dates
    }
  }
})