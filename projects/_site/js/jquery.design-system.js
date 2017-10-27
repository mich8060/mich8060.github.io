$(document).ready(function(){

	$(document).on({
		click:function(e){
			e.preventDefault();
			e.stopPropagation();
			$(this).addClass('active');
		}
	},'.more'); 
	
	$(document).on({
		click:function(e){  
			$('.more').removeClass('active');
		}
	})
	
});