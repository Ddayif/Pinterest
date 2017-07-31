$(document).ready(function(){
	$('.contenedor').masonry({
		itemSelector: '.elemento',
	});

	miJson.forEach(function(e){
		$('.elemento').append('<div class="col s2 m2 l2 xl2 caja"><img class="responsive-img materialboxed modal-trigger" href="#modal1" src="dist/img/'+ e.image_url +'">'+ '<br>' + '<h6 class="titulo left-align">'+ e.title+'</h6><i class="right material-icons">check_circle</i>'+'<i class="right material-icons">save</i>36,6k'+ '<p class= "descripcion left-align">'+ e.description+'</p><p class= "user left-align">'+ e.user + '&nbsp<span>#</span>' + e.hashtag + '</p></div');	
		console.log(e);
	});

	miJson.forEach(function(e){
		$('.contenedor-modal').append('<div class="row"><a href="#"><i class="material-icons">publish</i></a><a href="#"><i class="material-icons">check_circle</i></a><a href="#"><i class="material-icons">more_horiz</i></a><a class="btn red right"><i class="material-icons">save</i>Guardar</a><h6 class="titulo left-align">'+ e.title +'</h6>' + '<br>' + '<img  class=" responsive-img imagenes-modal" src="dist/img/'+ e.id +'.jpg">' + '<a href="#"><i class="material-icons">unarchive</i></a><a href="#"><i class="material-icons">check_circle</i></a><a href="#"><i class="material-icons">more_horiz</i></a><a class="btn red right"><i class="material-icons">save</i>Guardar</a></div></div>' + '<div class="row"><div class="col m6 l6 xl6"><p class"user left-align">'+ e.user + '&nbsp<span>#</span>' + e.hashtag + '</p></div>' + '<div class="col m6 l6 xl6"><a class="btn right"><i class="material-icons">library_books</i>Leerlo</a></div></div>' + '<p class="descripcion left-align">' + e.description + '</p>');
	})

	$('.modal').modal();
});