$(document).ready(function(){
	
	$system = ['.nav'];
	$types = ['components','elements','pages'];
	
	$.fn.build = function(component) {         
		$el = $(this);
		$classes = $el.attr('class');  
		$file = component.replace(/\./g,'');
		$url = "_components/"+$file+".html";     
		
		$.each($types,function(index,value){
			$url = "_"+value+"/"+$file+".html";
			$.ajax({         
		        async: true,
		        url:$url, 
				success:function(data,textStatus,xhr) {  
					$(component).replaceWith(data);
					$(component).addClass($classes);
					$(component).attr('data-type',value);
				}
			});
		});     
                    
	
	}       
	
	$.each($system, function(index,value){ if($(value).length){ $(value).build(value); } });
	
	
});