// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  let size = 50;
  count = (count + 1) % cycle;
   if(count <= 15){
       size += 0.5;
   } else if(count > 15 && count <= 50){
       size += 4;
   } else if(count > 50 && count <= 85){
       size -= 4;
   } else if(count > 85){
       size -= 0.5;
   }
  ellipse(width / 2, height / 2, size);
}
