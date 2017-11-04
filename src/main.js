$( document ).ready(function() {

  var contador = 1;


  	$('.menu_bar').click(function(){
  		// $('nav').toggle();

  		if(contador == 1){
  			$('nav').animate({
  				left: '0'
  			});


  			contador = 0;
  		} else {
  			contador = 1;
  			$('nav').animate({
  				left: '-100%'
  			});

  		}

  	});


  $("#contato").mask("(99) 99999-9999");
  $("#contatoCel").mask("(99) 99999-9999");






});
