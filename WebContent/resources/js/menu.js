jQuery(document).ready(function($) {

	$(".iconeMenu").click(function() {
		$(".menu").fadeToggle();
		$(this).toggleClass("fecha");
	});

});
