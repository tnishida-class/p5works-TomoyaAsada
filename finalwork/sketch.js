// 最終課題を制作しよう
let x, y,x1, y1, x2, y2, x3, y3, vx, vy;
const g = 1; // 重力加速度
const vyMax = 10;

function setup(){
  createCanvas(windowWidth, windowHeight);
//  count = 0;
//  cycle = 3000;
  selectedNumber = 0;

  x = width / 2;
  y = height / 2;
  x1 = width /2;
  y1 = height / 2.5;
  x2 = width / 2.2;
  y2 = height / 3;
  x3 = width / 2.5;
  y3 = height / 3.5;
  x4 = width / 2.8;
  y4 = height / 3.7;
  x5 = width / 3;
  y5 = height / 4;
  vx = 3;
  vy = 3;
  angle = 10;

  rainyButton = setButton("雨",{
    x: 300,
    y: 500
  });

  starButton = setButton("星",{
    x: 400,
    y: 500
  });

  moonButton = setButton("月",{
    x: 300,
    y: 550
  });

  cloudyButton = setButton("曇り",{
    x: 400,
    y: 550
  });

  randomButton = setButton("ランダム",{
    x: 500,
    y: 500
  });

  rainyButton.mousePressed(() => {
    selectedNumber = 1;
  });

  starButton.mousePressed(() => {
    selectedNumber = 2;
  });

  moonButton.mousePressed(() => {
    selectedNumber = 3;
    //乱数（整数）を発生させる
    randomNumber = floor(random()*100);
    print(randomNumber)

  });

  cloudyButton.mousePressed(() => {
    selectedNumber = 4;
  });

  randomButton.mousePressed(() => {
    selectedNumber = floor(random()*5);
    print(selectedNumber)

    //月なら乱数発生
    if(selectedNumber == 3){
      randomNumber = floor(random()*100);
      print(randomNumber)
    }
  });
}

function draw(){
  background(0, 0, 80);

  //count = (count + 1) % cycle;
  //星なら
  if(selectedNumber == 2){
    x += 6;
    y += 2;
    x1 += 7;
    y1 += 3;
    x2 += 8;
    y2 += 3;
    x3 += 9;
    y3 += 4;
    angle += 1;
    fill(255,215,0);
    star(x,y,9,angle);
    star(x1,y1,8,angle);
    star(x2,y2,6,angle);
    star(x3,y3,7,angle);
//雨なら
  } else if(selectedNumber == 1){
    background(64,64,64);
    fill(80,208,255)
    ellipse(x, y, 7);
    x += vx;
    y += vy;
    vy += g; // 加速度＝速度の増分
    vy = constrain(vy, -vyMax, vyMax);

    ellipse(x1, y1, 7);
    x1 += vx;
    y1 += vy + 0.5;
    vy += g; // 加速度＝速度の増分
    vy = constrain(vy, -vyMax, vyMax);

    ellipse(x2, y2, 7);
    x2 += vx;
    y2 += vy;
    vy += g; // 加速度＝速度の増分
    vy = constrain(vy, -vyMax, vyMax);

    ellipse(x3, y3, 7);
    x3 += vx;
    y3 += vy + 0.5;
    vy += g; // 加速度＝速度の増分
    vy = constrain(vy, -vyMax, vyMax);

    ellipse(x4, y4, 7);
    x4 += vx;
    y4 += vy + 0.5;
    vy += g; // 加速度＝速度の増分
    vy = constrain(vy, -vyMax, vyMax);

    ellipse(x4, y4, 7);
    x4 += vx;
    y4 += vy + 0.5;
    vy += g; // 加速度＝速度の増分
    vy = constrain(vy, -vyMax, vyMax);
//月なら
  } else if(selectedNumber == 3){
    //1%の確率でブラッドムーンになる
    if(randomNumber == 77){
      fill(255,70,30)
      ellipse(400,200,130);
    } else {
      fill(255,224,32);
      ellipse(400,200,100);
    }
//曇りなら
  } else if(selectedNumber == 4){
　　　　background(64,64,64);
  }

  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }

// 端の処理パターン (1) 反対側から出てくる
  if(x1 > width){ x1 = 0; }
  else if(x1 < 0){ x1 = width; }
  if(y1 > height){ y1 = 0; }
  if(y1 < 0){ y1 = height; }

// 端の処理パターン (1) 反対側から出てくる
  if(x2 > width){ x2 = 0; }
  else if(x2 < 0){ x2 = width; }
  if(y2 > height){ y2 = 0; }
  if(y2 < 0){ y2 = height; }

  if(x3 > width){ x3 = 0; }
  else if(x3 < 0){ x3 = width; }
  if(y3 > height){ y3 = 0; }
  if(y3 < 0){ y3 = height; }
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    theta = theta + angle;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

//ボタンを設定
function setButton(label, pos) {
  const button = createButton(label);
  button.size(80, 30);
  button.position(pos.x, pos.y);
  return button;
}
