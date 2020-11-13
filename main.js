var app = new Vue({
  el: "#app",
  data: {
    //ウインドウのサイズ
    width: window.innerWidth,
    height: window.innerHeight,
  },
  created: function () {
    //イベントハンドラを登録
    addEventListener("resize", this.resizeHandler);
  },
  //   beforeDestroy: function () {
  //     removeEventListener("resize", this.resizeHandler);
  //   },
  methods: {
    //イベントハンドラ
    resizeHandler: function ($event) {
      //現在のウインドウサイズでプロパティを更新
      this.width = $event.target.innerWidth;
      this.height = $event.target.innerHeight;
    },
  },
});
