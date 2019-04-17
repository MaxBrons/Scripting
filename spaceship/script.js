const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
///////////////////////////////////////

let myRotation = 0.5;
let shipVelocity = 0;
let speedX = 5;
let speedY = 5;
let xPos = 200;
let yPos = 200;

let ship = new Image();
ship.src = "img/spaceship.png";
////////////////////////////////////////

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  context.translate(xPos,yPos);
  myRotation = Math.atan2(speedY,speedX);
  context.rotate(myRotation);
  context.drawImage(ship,-ship.width/2,ship.height/2);
  xPos += speedX;
  yPos += speedY;
  context.resetTransform();

  if (xPos > canvas.width + ship.width) {
    xPos = 0;
  }
  if (yPos > canvas.height + ship.height) {
    yPos = 0;
  }
  if (xPos < 0) {
    xPos = canvas.width;
  }
  if (yPos < 0) {
    yPos = canvas.height;
  }

if(shipVelocity >= 0) {
  shipVelocity -= 0.001;
} else if(shipVelocity <= 0) {
  shipVelocity += 0.001;
}
}

function keyhandler(evt){
  switch (evt.key) {
    case 'a':
      speedX-=0.5;
      break;
    case 'd':
      speedX+=0.5;
      break;
    case 'w':
      speedY-=0.5;
      break;
    case 's':
      speedY +=0.5;
      break;
}
}

window.addEventListener('keydown', keyhandler);
animate();
