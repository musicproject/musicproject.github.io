// JavaScript Document
( function($) {
	$(function() {
		iMasters.init();
	});
	var iMasters = {
		init : function() {
			
			$("header").load('/template/header.php');
			$("footer").load('/template/footer.php');
			$("body").load('/home.php');
			
			iMasters.outraFuncao();
		},
		outraFuncao : function() {
			// Códigos desejados...
		}
	};
})(jQuery);

function carregar(pagina){
        $("main").load(pagina);
}