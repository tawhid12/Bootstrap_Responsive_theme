$(document).ready(function(){
	$(document).scroll(function(){
		var windowHeight = $(document).height ();
		var scrollPosTop = $(document).scrollTop();
		var scrollPosBottom = windowHeight+scrollPosTop;
		$('.status').html(scrollPosBottom);
	});
})