'use strict';

$(document).ready(function() {
	initializePage();
	$(function() {
		$(".media").each(function() {
			var hue = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')';
			$(this).css("background-color", hue);});
	});
})

function initializePage() {
	$(".like").click(liked);
}

function liked(e) {
	// x.toggleClass('step-backward');
	// x.classList.toggle("fa-thumbs-down");
	e.preventDefault();
	$('i').toggleClass('fa-thumbs-down');
}
