$(document).ready(function(){
    
    var $messages = $('#messages');
    var skip=Math.floor(Math.random()*110)    
    console.log(skip); //getting a random number to skip in the list of fortunes
    
    $.ajax({ //using ajax, passing an object
    	type: 'GET',
    	url: 'http://fortunecookieapi.com/v1/fortunes?limit=1&skip=' + skip,
    	success: function(data){
    		console.log("success", data);

            for(var i=0; i<data.length; i++){
                $messages.append('<p>' + data[i].message + '..in bed.' + '</p>');
            }
    		// $.each(data, function(i, message){  //each function in jquery goes loops through and array and does something.
    		// 	$messages.append('<li>message: ' + data.message + '</li>');
    		// });
    		
    	}
    });
});