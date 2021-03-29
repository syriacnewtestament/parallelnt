$(document).ready(function() {
    current_year_insert();
	$(".pop_up_video").removeClass('d-none');  
	$(".pop_up_video").hide();
	setTimeout(
	  function() 
	  {
		
		$(".pop_up_video").slideDown("slow");
	  }, 5000);
   });


function close_pop_up(){
	$(".pop_up_video").slideUp("slow");
}

function current_year_insert() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("current_year").innerHTML = n;
  }