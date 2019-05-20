let imageOrig = document.getElementById("imageOrig");
const inputElement = document.getElementById("input");
let fileList;
inputElement.addEventListener("change", loadFiles, false);

function draw(img){
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  let data = imageData.data;
  let invert = function(){
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i]; //red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; //blue
    }
    context.putImageData(imageData, 0, 0);
  }
  let grayscale = function(){
    for (let i = 0; i < data.length; i += 4) {
      let avg = (data[i] + data[i+1] + data[i+2]) / 3;
      data[i] = avg; //red
      data[i + 1] = avg; // green
      data[i + 2] = avg; //blue
    }
    context.putImageData(imageData, 0, 0);
  }
  let resetImage = function(){
    loadImage(imageOrig.src);
  }
  let noRedImage = function(){
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 0; //red
    }
    context.putImageData(imageData, 0, 0);
  }
  let invertbtn = document.getElementById("invertbtn");
  invertbtn.addEventListener("click", invert);
  let grayscalebtn = document.getElementById("grayscalebtn");
  grayscalebtn.addEventListener("click", grayscale);
  let reset = document.getElementById("reset");
  reset.addEventListener("click", resetImage);
  let noRed = document.getElementById("noRed");
  noRed.addEventListener("click", noRedImage);
}
function loadFiles(){
  fileList = this.files;
  let file = fileList[0];
  let url = window.URL || window.webkitURL;
  let imageSrc = url.createObjectURL(file);
  loadImage(imageSrc);
}
function loadImage(imgSrc){
  imageOrig.src = imgSrc;
  let img = new Image();
  img.src = imgSrc;
  console.log(img.src + " " + img.width + " " + img.height);
  img.onload = function(){
    draw(this);
  }
}
