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
      if(j <= 3 && x % 2 == 0){
        let p1 = i * 20 + 10;
        let q1 = j * 20 - 10;
        fill(255,0,0);
        ellipse(p1,q1,15);
       }
      //　6行目以降で灰色の部分なら黒い円を描く
        else if(j >= 5 && x % 2 == 1){
        let p2 = i * 20 + 10;
        let q2 = (j + 1) * 20 - 10;
        fill(0,0,0);
        ellipse(p2,q2,15);
      }
    }
  }
}
