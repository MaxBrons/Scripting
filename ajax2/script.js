let bereken = document.getElementById("bereken");
let lengte = document.getElementById("lengte");
let gewicht = document.getElementById("gewicht");
let resultaat = document.getElementById("resultaat");
let input = document.getElementById("input");

bereken.addEventListener('click', function(){

  ajax(gewicht.value,lengte.value);
  resultaat.style.height = "100%";
  resultaat.style.margin = "0.5em";
  resultaat.style.padding = "0.5em";
  resultaat.style.width = "600px";
  resultaat.style.border = "3px solid darkred";
});
