$(document).ready(function(){
	
	$system = ['.nav'];
	
	$.fn.exists = function(url){
	    var http = new XMLHttpRequest();
	    	http.open('HEAD', url, false);
	    	http.send();
	    return http.status!=404;
	} 
	
	$.fn.build = function(component) {         
		$el = $(this);
		$classes = $el.attr('class');  
		$file = component.replace(/\./g,'');
		if($el.exists("_components/"+$file+".html")){
			$type = 'components';
		}else if($el.exists("_elements/"+$file+".html")){
   			$type = 'elements';
		}  
		$.get({
			url:"_"+$type+"/"+$file+".html",
			context: document.body
		},function(data) {                                      
			$(component).replaceWith(data);
			$(component).addClass($classes);
			$(component).attr('data-type',$type);                   
		});	
	}       
	
	$.each($system, function(index,value){ if($(value).length){ $(value).build(value); } });
	
	
});