class Ball {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.vx = 5;
    this.vy = 2;
    this.color = color;
  }

  draw(context){
    context.beginPath();
    context.fillstyle = this.color;
    context.arc(this.x,this.y,this.r,0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();
  }
}
//---------------------------------------------------------//
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let balls = [];
//-----------------------------------------------------------//

function animate(){
  if (Math.random()<0.01) {
      let myBall = new Ball(getRandomNumber(canvas.width),0,20,"red");
      balls.push(myBall);
      myBall.draw(context);
  }
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  for (var i = 0; i < balls.length; i++) {
    let myBall = balls[i];
    myBall.y += myBall.vy;
    myBall.draw(context);
    if (myBall.y > canvas.height+40) {
      balls.splice(i,1)
    }
  }
}

animate();

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}

window.addEventListener("mousedown",mouseEvent);

function mouseEvent(evt){
  for (var i = 0; i < balls.length; i++) {
    let dx = evt.clientX - balls[i].x;
    let dy = evt.clientY - balls[i].y;
    let distance = Math.sqrt((dx*dx) + (dy*dy));
    if (evt.clientY < distance || evt.clientX > distance) {
        balls.splice(i,1);
    }
  }
}
