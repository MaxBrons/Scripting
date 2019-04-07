<?php
  $gewicht = $_GET["gewicht"];
  $lengte = $_GET["lengte_cm"];

  BMIcalc($gewicht,$lengte);

  function BMIcalc($gewicht,$lengte){
    $lengte /= 100;
    $totaal = $gewicht/($lengte * $lengte);
    echo "BMI meter: <br>
    Lengte: " . $lengte . " Meter <br>
    gewicht: " . $gewicht . " KG <br>";
    $totaal = number_format($totaal,1);
    
    if ($totaal < 18.5) {
    echo "<p style='color:blue'> BMI: " . $totaal . "<br> Categorie: Ondergewicht</p>";
  } else if ($totaal < 25 && $totaal >= 18.5) {
    echo "<p style='color:green'> BMI: " . $totaal . "<br> Categorie: Normaal/gezond</p>";
  } else if ($totaal < 27 && $totaal >= 25) {
    echo "<p style='color:yellow'> BMI: " . $totaal . "<br> Categorie: Licht Overgewicht</p>";
  } else if ($totaal < 30 && $totaal >= 27) {
    echo "<p style='color:orange'> BMI: " . $totaal . "<br> Categorie: Matig Overgewicht</p>";
  } else if ($totaal < 40 && $totaal >= 30) {
    echo "<p style='color:red'> BMI: " . $totaal . "<br> Categorie: Obesitas</p>";
  } else if ($totaal >= 40) {
    echo "<p style='color:darkred'> BMI: " . $totaal . "<br> Categorie: Morbide Obesitas</p>";
  }
}

?>
