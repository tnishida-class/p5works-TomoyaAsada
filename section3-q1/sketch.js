// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t){
  let w = textWidth(t); //幅
  let h = textAscent() + textDescent();　//高さ
  let p = 2;
  fill(0);
  let x = w/2
  let y = h
  ellipse(x,y,w + p * 2,h + p * 2);

//  fill(0)
//  for(let i = 0; i < 50; i++){
//   const theta = TWO_PI * i / 50; // TWO_PI は円周率πの2倍（ほかに PI, HALF_PI, QUARTER_PI　がある）
//   const x = w/2 + cos(theta) * 10; // 関数 cos の戻り値を使用
//   const y = h + sin(theta) * 10; // 関数 sin の戻り値を使用
//   ellipse(x, y, w, p);
// }// 関数 ellipse の副作用で円が描画される

//  fill(0);
//  rect(0, 0, w + p * 2, h + p * 2);
  fill(255);
  text(t, p, h + p);
}
