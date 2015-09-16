$(document).ready(function(){
        var $messages = $('#messages');
    var skip=Math.floor(Math.random()*110);    
    console.log(skip); //getting a random number to skip in the list of fortunes
    
        $.ajax({ //using ajax, passing an object
        	type: 'GET',
        	url: 'http://fortunecookieapi.com/v1/fortunes?limit=1&skip=' + skip,
        	success: function(data){
        		//console.log("success", data);
                $messages.text(data[0].message + '..in bed.');
        	}
        });
        $('#refresh').click(function(){
            //alert('hey!');
            skip=Math.floor(Math.random()*110);
            $.ajax({ //using ajax, passing an object
                type: 'GET',
                url: 'http://fortunecookieapi.com/v1/fortunes?limit=1&skip=' + skip,
                success: function(data){
                    //console.log("success", data);
                    $messages.text(data[0].message + '..in bed.');
                }
            });
        })

});

