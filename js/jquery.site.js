$(document).ready(function(){
	
	$current = 0;
	$direction = 'down';
	$mobile = ($(window).width() < 900) ? true : false;
	
	
		$(document).on({
			scroll: function(e){
				$mobile = ($(window).width() < 900) ? true : false;
				if(!$mobile){
					$scroll = $(window).scrollTop();
					$direction = ($scroll > $current) ? 'down':'up';
					$current = $scroll;

					$('section').each(function(index){
						$position = $(this).offset().top;
						$height = $(this).height();
						if($scroll >= $position && $scroll <= ($position + $height)){
							$header = $('header');
							$theme = $(this).attr('theme');
							if(!$header.hasClass($theme)){
								$header.removeClass();
								$header.addClass($theme);
							}
						}
					});

					$('.anchored').each(function(index){
						$position = $(this).offset().top;
						$height = $(this).height();

						if($scroll >= $position){
							if($direction == 'down'){
								$(this).find('.project').css({
									'position':'absolute'
								})
							}
						}else if($scroll < ($position + $height)){
							if($direction == 'up'){
								$(this).find('.project').css({
									'position':'fixed'
								});
							}
						}
					});
				}
			}
		});

	
	$(window).load(function(){
		if(!$mobile){
			$('.anchored').each(function(index){
				$(this).find('.project').css({
					'position':'static'
				});
				$(this).css('height',$(this).innerHeight());
				$(this).find('.project').css({
					'position':'fixed',
					'z-index':$('.anchored').length - index
				});
			});
		}
	})
	
	$(window).resize(function(){
		$mobile = ($(window).width() < 900) ? true : false;
		$('.anchored').each(function(index){
			if($mobile){
				$(this).find('.project').css({
					'position':'static'
				});
			}
			$(this).css('height','auto');
			$(this).css('height',$(this).innerHeight());
		});
	})
	
});