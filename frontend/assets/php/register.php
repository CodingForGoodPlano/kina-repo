<?php

	$user = $_POST['user'];
	$passw = $_POST['pass'];
	$login = $_POST['login'];

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "capitalone";

	$user = mysql_escape_string($user);
	$pass = mysql_escape_string($passw);


	$conn = mysql_connect($servername, $username, $password) or die(mysql_error());

	if($login == 0)	{
		$sql = "SELECT Email FROM users WHERE Email='$user'";	
		mysql_select_db($dbname);

		if($result = mysql_query($sql, $conn))	{
			//email already taken
			if(mysql_num_rows($result))	{
				$record = mysql_fetch_assoc($result);
				print_r("Taken");
			}
			//email not taken, proceed w'th registration
			else{
				$sql = "INSERT INTO users (Email, Password) 
				VALUES ('$user', '$pass')";
				if($result = mysql_query($sql, $conn))	{
					print_r("Success");
				}
				else{
					print_r("Error");
				}
			}
		}
	}

	else if($login == 1)	{
		$sql = "SELECT Password FROM users WHERE Email='$user'";
		mysql_select_db($dbname);

		if($result = mysql_query($sql, $conn))	{
			if(mysql_num_rows($result))	{
				$record = mysql_fetch_assoc($result);
				if ($record['Password'] == $passw)	{
					print_r('True');
				}
				else{
					print_r('False');
				}
			}

			else{
				echo "False";
			}

		}
		else{
			echo "False";
		}


	}



?>