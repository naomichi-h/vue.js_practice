//Vue.filterは、new Vueを実行するよりも前に定義する
Vue.filter("number_format", function (val) {
  return val.toLocaleString();
});

var app = new Vue({
  el: "#app",
  data: {
    price: 1000,
  },
});
