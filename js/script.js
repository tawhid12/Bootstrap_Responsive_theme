$(function () {
	"use strict";
	// On Scroll  Nav background color change//
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll > 300) {
			$(".navbar").addClass("nav-background");
		} else {
			$(".navbar").removeClass("nav-background");
		}
	});
	
	/*Counter*/
		$(document).ready(function() {
		// Counter Up//
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		});
});