<?php
$firstName = $_GET['firstName'];
$lastName = $_GET['lastName'];
$age = $_GET['age'];
echo "<h2>Response Form</h2><h3>";
echo "You're submitted information<br><ul>";
echo "<li>Name: <strong> $firstName</strong></li>";
echo "<li>Name: <strong> $lastName</strong></li>";
echo "<li>Age: <strong> $age</strong></li>";
echo "</li></ul></h3>";
echo "Form recieved at: " . "<br>";
echo "Date: " . date("Y/m/d") . "<br>";
echo "Time: " . date("h:i:sa") . "<br>";
?>
