$(function(){

	// $("#main h1").css("color","red");

	$("#nav a").on("click", function(){
		let id = $(this).attr("href");
		let position = $(id).offset().top;
		$('body, html').animate({
			scrollTop: position
		}, slow)
	// })

	  $('#nav .features').click(function(e) {
     $('#features').tab('show');
   }); 

});