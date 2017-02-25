// JavaScript Document
( function($) {
	$(function() {
		iMasters.init();
	});
	var iMasters = {
		init : function() {
			
			
			$("main").load('/home.php');
			$("header").load('/template/header.php');
			$("footer").load('/template/footer.php');
		},
		
	};
})(jQuery);

function carregar(pagina){
        $("main").load(pagina);
}