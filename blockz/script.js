const canvas = document.getElementById("canvas");
const cv = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "red";
canvas.style.border = "5px solid darkblue";

draw();

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}

function draw(){
  let posX = getRandomNumber(canvas.width);
  let posY = getRandomNumber(canvas.height);


  cv.beginPath();
  cv.rect(posX,posY,5,5);
  cv.fill();
  cv.closePath();
  cv.stroke();

  requestAnimationFrame(draw);
  cv.strokeStyle = "rgb(" + getRandomNumber(255) + "," + getRandomNumber(255) + "," + getRandomNumber(255) + ")";
  cv.fillStyle = "rgb(" + getRandomNumber(255) + "," + getRandomNumber(255) + "," + getRandomNumber(255) + ")";

}
