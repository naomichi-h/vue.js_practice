var app = new Vue({
  el: "#app",
  data: {
    point: { x: 0, y: 0 },
  },
  created: function () {
    //イベントハンドラを登録
    addEventListener("mousemove", this.mousemoveHandler);
  },
  beforeDestroy: function () {
    removeEventListener("mousemove", this.mousemoveHandler);
  },
  methods: {
    //イベントハンドラ
    mousemoveHandler: function ($event) {
      //マウスの位置でプロパティを更新
      this.point.x = $event.clientX;
      this.point.y = $event.clientY;
    },
  },
});
