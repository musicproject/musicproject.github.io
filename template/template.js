// JavaScript Document
( function($) {
	$(function() {
		iMasters.init();
	});
	var iMasters = {
		init : function() {
			
			
			$("body").load('/home.php');
			
			iMasters.outraFuncao();
		},
		outraFuncao : function() {
			$("header").load('/template/header.php');
			$("footer").load('/template/footer.php');
		}
	};
})(jQuery);

function carregar(pagina){
        $("main").load(pagina);
}