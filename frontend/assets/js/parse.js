



	$(document).ready(function($){	
		console.log('ready');

		//if give info button, return info
		$("#testButton").click(function()	{
			

			$.ajax({
			asnc:true,
			type:'GET',
			data:'school=' + $('#school').val(),
			url:'database.php',
			success: function(msg)	{
				$('#testme').html(msg);
				//console.log('something');		
			}
			});
		});

		//if signup button is clicked then register the user 
		$("#signUp").click(function()	{
			var userReg = $('#userReg').val();
			var passReg = $('#passReg').val();

			if(userReg.length > 10 && passReg.length > 4)	{
				$.ajax({
					async:true,
					url:'../assets/php/register.php',
					type:'POST',
					data:{user:userReg, pass:passReg, login:0},
					success:function(msg)	{
						if(msg == "Success")	{
							console.log("successful");
							//window.location('whatever');
						}
						else if(msg == "Error")	{
							console.log('uh oh');
							window.reload();
							alert("There was an error");
						}
						else if (msg == "Taken")	{
							console.log('taken');
							alert("This email has been taken");
						}
						else{
							console.log(msg);
						}
					}


				});
			}
		});

		$('#signIn').click( function()	{
			var userReg = $('#userReg').val();
			var passReg = $('#passReg').val();
			console.log('clicked');
			if(userReg.length > 6 && passReg.length > 3)	{
				$.ajax({
					async:true,
					url:'../assets/php/register.php',
					type:'POST',
					data:{user:userReg, pass:passReg, login:1},
					success: function(msg)	{
						if (msg =="True")	{
							alert("Login Successful!");
							window.location.assign("http://www.google.com");
						}
						else if(msg == "False")	{
							alert("Invalid User or Pass!");
							 location.reload();
						}
						else{
							console.log(msg);
						}
					}
				});
			}
		});
		
	});

	function validateSignIn()	{
		console.log('validate');
		$.ajax({
					async:true,
					url:'../assets/php/register.php',
					type:'POST',
					data:{user:userReg, pass:passReg, login:0},
					success: function(msg)	{
						if (msg =="True")	{
//return true;				
							return false;
						}
						else if(msg == "False")	{
							return false;
							//return true;
							// window.reload();
						}
						else{
							return false;
							console.log(msg);
							//return false;
						}
					}

				});
		return false;
	}
