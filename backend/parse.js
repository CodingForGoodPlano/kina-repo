



	$(document).ready(function($){	
		
		$("#testButton").click(function()	{
			var school = $('#school').val().trim();

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
		
	});

