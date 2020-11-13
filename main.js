var app = new Vue({
  el: "#app",
  data: {
    stock: 10,
  },
  methods: {
    //イベントハンドラ
    onDeleteItem: function () {
      this.stock--;
    },
  },
  computed: {
    //加工したメッセージを返す算出プロパティ
    message: function () {
      if (this.stock == 0) {
        return "売り切れ";
      }
      return "";
    },
  },
  watch: {
    //算出プロパティが変化した時呼び出されるハンドラ
    message: function () {
      console.log("商品のステータスが変化しました。");
    },
  },
});
