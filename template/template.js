// JavaScript Document
( function($) {
	$(function() {
		iMasters.init();
	});
	var iMasters = {
		init : function() {
			$("footer").load('/template/footer.php');
		},
		
	};
})(jQuery);

function carregar(pagina){
        $("main").load(pagina);
}