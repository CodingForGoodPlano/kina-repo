<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "capitalone";
$school = $_GET['school'];
$school = mysql_real_escape_string($school);

$conn = mysql_connect($servername, $username, $password) or die(mysql_error());
$sql = "SELECT Total, TenLoan, Monthly FROM schoolinfo WHERE University='$school'";
mysql_select_db($dbname);
if($result = mysql_query($sql, $conn))	{
	if(mysql_num_rows($result))	{
		$record = mysql_fetch_assoc($result);
		print_r($record);
	}
	else{
		print_r('sorry, could not find');
	}
}
else{
	print_r('Sorry, could not find');
}



?>