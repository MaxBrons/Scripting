const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let images = ["img/50cal.png","img/mp5.jpg","img/ak.png","img/m4.png"];
let imgObjects = [];

function animate(){
  if(Math.random()<0.1){
    let imgObject = {};
    imgObject.image = new Image();
    imgObject.image.src = images[getRandomNumber(images.length)];
    imgObject.x = getRandomNumber(canvas.width);
    imgObject.y = -150;
    imgObject.scale = Math.random();
    imgObject.v_y = 10;
    imgObjects.push(imgObject);
  }
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  for(let i = 0; i< imgObjects.length;i++){
    let imgObject = imgObjects[i];

    imgObject.y += imgObject.v_y*imgObject.scale;
    context.drawImage(imgObject.image,imgObject.x,imgObject.y,imgObject.image.width*imgObject.scale,imgObject.image.height*imgObject.scale);
    if(imgObject.y > canvas.height){
      imgObjects.splice(i,1);
    }
  }
}

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}

animate();
