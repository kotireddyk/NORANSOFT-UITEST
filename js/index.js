$(document).ready(function(){
	/*var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		
		$('#calendar').fullCalendar({
	    });*/
    $(".slidebuttons li").click(function(){
    	$(this).addClass("buttonj").siblings().addClass("buttonj");
    
    });
});