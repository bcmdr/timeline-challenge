// assume import TimelineCards

Vue.component('ul-card-list', {
  // TODO refactor card into child component of cardList
  template: '<ol><li v-for="card in cardList">{{ card.year }} — {{ card.title }}</li></ol>',
  data: function () {
    return {
      cardList: TimelineCards.formattedList
    }
  }
})

new Vue({
  el: "#main",
  // data: {
  //   cardList: TimelineCards.formattedList
  // },
  // created: function () {
  //   console.log(this.cardList)
  // },
})
