jQuery(document).ready(function($) {

	$(".mostraEsquerda").click(function() {
		$(".menuLeft").fadeToggle();
		$(".mostraEsquerda").toggleClass("fecha");
	});

	$(".iconeMenu").click(function() {
		$(this).toggleClass("fecha");
	})

});
