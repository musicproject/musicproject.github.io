// JavaScript Document
( function($) {
	$(function() {
		iMasters.init();
	});
	var iMasters = {
		init : function() {
			
			$("header").load('header.php');
			
			iMasters.outraFuncao();
		},
		outraFuncao : function() {
			// Códigos desejados...
		}
	};
})(jQuery);

function carregar(pagina){
        $("#conteudo").load(pagina);
    }