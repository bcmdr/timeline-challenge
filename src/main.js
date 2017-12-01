// Assume lib/TimelineCards.js

var cardListVM = new Vue({
  el: main,
  data: {
    cardList: TimelineCards.formattedList
  },
  created: function () {
    console.log(this.cardList)
  }
})
