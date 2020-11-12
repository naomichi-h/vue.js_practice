//「動くもの」クラスの定義
var Movable = function (x, y) {
  this.pos = {
    x: x,
    y: y,
  };
  this.move = function (x, y) {
    this.pos.x += x;
    this.pos.y += y;
  };
};

//ボールオブジェクトを格納する空の配列を用意する
var ball = [];

//100個分の繰り返し
for (var i = 0; i <= 100; i++) {
  //ボールオブジェクトのインスタンスを生成する
  ball[i] = new Movable(
    Math.floor(Math.random() * innerWidth),
    Math.floor(Math.random() * innerHeight)
  );
}

//ボールをブラウザに描画する（ボールに座標を与える）
for (var i = 0; i <= 100; i++) {
  document.write(
    '<div class="ball" style="top:' +
      ball[i].pos.y +
      "px; left:" +
      ball[i].pos.x +
      'px;">●</div>'
  );
}
