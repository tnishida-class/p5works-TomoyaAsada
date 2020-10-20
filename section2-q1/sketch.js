// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    // BLANK[1]
    if(i <= 5){
      stroke(255,0,0);
    } else if(i >= 6) {
      stroke(0,0,225);
    }
    ellipse(50,50,50 - i * 5);
  }
}
