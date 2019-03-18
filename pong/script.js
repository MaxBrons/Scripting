class ball {
  constructor(x,y, colorName) {
    this.x = Math.random()*window.innerWidth-30;
    this.y = Math.random()*window.innerHeight-30;
    this.colorName = ["white","blue","green","orange","lightblue","red"] || 'green';
  }

  draw(context){
    context.beginPath();
    context.fillStyle = /*this.colorName[Math.round(Math.random()*5)]*/ "red";
    context.arc(this.x,this.y,30,0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();
  }
}

class paddle {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  draw(context){
    context.beginPath();
    context.fillStyle = "green";
    context.rect(this.x, this.y, 40, 100);
    context.fill();
    context.stroke();
    context.closePath();
  }
}
//-----------------------------------------------------------------------------//

function radiusChange(radius){
  this.radius = Math.random()*100;
}

//-----------------------------------------------------------------------------//

const canvas  = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth-4;
canvas.height = window.innerHeight-4;

//----------------------------------------------------------------------------//
let speedX = Math.random()*15;
let speedY = Math.random()*15;
let myball = new ball(this.radius,this.radius);
myball.draw(context);

// let speedX2 = Math.random()*15;
// let speedY2 = Math.random()*15;
// let myball2 = new ball(this.radius,this.radius);
// myball2.draw(context);

let left = new paddle(window.innerWidth/7.2,window.innerHeight/2);
left.draw(context);

let right = new paddle(window.innerWidth/1.2,window.innerHeight/2);
right.draw(context);

console.log(window.innerWidth);
console.log(left,right);
//----------------------------------------------------------------------------//

function animate(){

  window.requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

//----------------------------//
right.draw(context);
left.draw(context);

right.y = myball.y-20;

  myball.draw(context);
  // myball2.draw(context);
  myball.x += speedX;
  myball.y += speedY;
  // myball2.x += speedX2;
  // myball2.y += speedY2;

  if(myball.y > canvas.height-30){
    speedY = -speedY;
  }
  if(myball.y <0 ){
    speedY = -speedY;
  }
  if(myball.x > canvas.width - 30 ){
    speedX = -speedX;
  }
  if(myball.x < 0 || myball.y <= right.y+100 && myball.y >= right.y-100 && myball.x == right.x){
    speedX = -speedX;
  }

  // if(myball2.y > canvas.height-30){
  //   speedY2 = -speedY2;
  // }
  // if(myball2.y <0 ){
  //   speedY2 = -speedY2;
  // }
  // if(myball2.x > canvas.width - 30 ){
  //   speedX2 = -speedX2;
  // }
  // if(myball2.x < 0 ){
  //   speedX2 = -speedX2;
  // }
}
animate();

//----------------------------------------------------------------------------//


function keyhandler(evt){
  switch (evt.key) {
    case 'w':
    if (left.y >= canvas.height) {
      left.y -= 0;
    } else{
      left.y -= 30;
    }
      break;

    case 's':
    if (left.y-30 < 0) {
      left.y += 0;
    }
    else{
      left.y += 30;
    }
    default:

  }
}

window.addEventListener('keydown', keyhandler);
