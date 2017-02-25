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

function carregar(destino,origem){
        $(destino > "head").load(origem+" h1:lt(1)");
		$(destino > "body").load(origiem+" p:lt(1)");
}