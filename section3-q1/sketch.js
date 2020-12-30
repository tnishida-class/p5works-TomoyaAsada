// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",200,200,0,0,0);
}

function balloon(t,x,y,a,b,c){
  let w = textWidth(t); //幅
  let h = textAscent() + textDescent();　//高さ
  let p = 30;
  fill(a,b,c);
  ellipse(x,y,w + p * 2, h + p * 2);
  fill(a,b,c);
  triangle(230,230,260, 190, 280, 250);

  fill(255);
  text(t, 140, 208);
}
