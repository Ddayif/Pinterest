$(document).ready(function(){
	$('.contenedor').masonry({
		itemSelector: '.elemento',
	});

	miJson.forEach(function(el){
		console.log(el);
	});

});
	/*$(function () {
    var myArray = $(miJson);
    $.each(myArray, function (index, value) {
   	$(.elemento).append("<p>" + miJson.title + "<p>")
        console.log(value);
    });
});

	/*$(miJson).each(function(el){
		
	});*/
	/*	miJson.forEach(function(el){
		$('').html(el.image_url)
		$('.elemento').html(el.title)
	});*/