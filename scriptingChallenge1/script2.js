let lengteRH = document.getElementById("lengteRH");
let breedteRH = document.getElementById("BreedteRH");
let oppvl = document.getElementById("Oppvl");
let omtr = document.getElementById("Omtr");
let rechthoekAntw = document.getElementById("RechthoekAntw");
let buttonRechthoek = document.getElementById("buttonRechthoek");

//-------------------------------------------------------------------------//

buttonRechthoek.addEventListener('click',berekenRechthoek);

//------------------------------------------------------------------------//

function berekenRechthoek(){
  lengteRH.value = lengteRH.value.replace(/[^0-9.]/g, "");
  breedteRH.value = breedteRH.value.replace(/[^0-9.]/g, "");

  if (!lengteRH.value < 0.1 || !breedteRH.value < 0.1) {
    if (!lengteRH.value == "" && !breedteRH.value == "") {
      oppvl.innerHTML = Math.round(lengteRH.value*breedteRH.value);
      oppvl.style.color = "black";
      omtr.innerHTML = Math.round(2*lengteRH.value + 2*breedteRH.value);
      omtr.style.color = "black";
    } else {
      rechthoekAntw.style.color = "red";
      rechthoekAntw.innerHTML = "Verkeerde Invoer of je hebt nog niets ingevoerd.";
      setTimeout(()=>{
        rechthoekAntw.innerHTML = "";
      },3000);
    }

  } else {
    rechthoekAntw.style.color = "red";
    rechthoekAntw.innerHTML = "Verkeerde Invoer of je hebt nog niets ingevoerd.";
    setTimeout(()=>{
      rechthoekAntw.innerHTML = "";
    },3000);
  }
  lengteRH.value = "";
  breedteRH.value = "";
}

//-------------------------------------------------------------------//
