<?php
$schoolNum = $_POST["snum"];
$name = $_POST["name"];
$gender = $_POST["gender"];
$dormi = $_POST["dormi"];
$dormiNum = $_POST["dnum"];
$phoneNum = $_POST["pnum"];
$moap = $_POST["moap"];

$conn = mysqli_connect('mysql', 'root', '111111', 'mysql');
$sql = "insert into aform values('$shoolNum', '$name', '$gender', '$dormi', '$dormiNum', '$phoneNum', '$moap')";
mysqli_query($conn, $sql);

mysqli_close($conn);
?>