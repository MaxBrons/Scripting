let straal = document.getElementById("straal");
let oppervlakte = document.getElementById("oppervlakte");
let omtrek = document.getElementById("Omtrek");
let oppOmtrek = document.getElementById("buttonOppOmtrek");
let straalAntw = document.getElementById("straalAntw");

//-------------------------------------------------------------------//

oppOmtrek.addEventListener('click',berekenOppOmtrek);

//-------------------------------------------------------------------//

function berekenOppOmtrek(){
  straal.value = straal.value.replace(/[^0-9.]/g, "");

    if (!straal.value < 0.1){
      oppervlakte.innerHTML = Math.round(3.14*straal.value*straal.value);;
      oppervlakte.style.color = "black";
      omtrek.innerHTML = Math.round(2*3.14*straal.value);
      omtrek.style.color = "black";
    } else {
      straalAntw.style.color = "red";
      straalAntw.innerHTML = "Verkeerde Invoer of je hebt nog niets ingevoerd.";
      setTimeout(()=>{
        straalAntw.innerHTML = "";
      },3000);
  }

  //--------------------//
  straal.value = "";
}
//-------------------------------------------------------------------//
