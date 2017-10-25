$(document).ready(function(){
	
	$system = ['.nav'];                         
	
	$.fn.build = function(component) {         
		$el = $(this);
		$classes = $el.attr('class');  
		$file = component.replace(/\./g,'');
		$url = $file+".html";     
		
		$.ajax({         
	        async: true,
	        url:$url, 
			success:function(data,textStatus,xhr) {  
				$(component).replaceWith(data);
				$(component).addClass($classes);      
			}
		});   
                    
	
	}       
	
	$.each($system, function(index,value){ if($(value).length){ $(value).build(value); } });
	
	
});