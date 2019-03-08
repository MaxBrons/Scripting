let gradC = document.getElementById("gradC");
let gradCAntw = document.getElementById("GradCAntw");
let gradF = document.getElementById("gradF");
let gradK = document.getElementById("gradK");
let buttonGrad = document.getElementById("buttonGrad");

//---------------------------------------------------------//

buttonGrad.addEventListener('click',berekenGraden);

//------------------------------------------------------------//

function berekenGraden(){
  gradC.value = gradC.value.replace(/[^0-9.]/g, "");
  if (!gradC.value < 0.1){
    gradF.innerHTML = Math.round((9*gradC.value/5) + 32);
    gradF.style.color = "black";
    gradK.innerHTML = gradC.value*1 + 273;
    gradK.style.color = "black";
  } else {
    gradCAntw.style.color = "red";
    gradCAntw.innerHTML = "Verkeerde Invoer of je hebt nog niets ingevoerd.";
    setTimeout(()=>{
      gradCAntw.innerHTML = "";
    },3000);
  }
  gradC.value = "";
}
