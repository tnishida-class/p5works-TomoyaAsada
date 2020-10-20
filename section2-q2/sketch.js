// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      let x = j + i;
      fill(x % 2 == 0 ? 255 : 180);
      // iは列、jは行　後二つの数は正方形のへんの長さ
      // １０、１０に設定しておくと、それぞれの正方形がくっついて碁盤状になる
      rect(i * 20, j * 20, 20, 20);
      // 3行目までの灰色の部分なら赤い円を描く
      if(j <= 3 && x % 2 == 1){
        fill(255,0,0)
        ellipse(i * 22, j * 22,20, 20)
      }
    }
  }
}
