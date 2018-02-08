'use strict';

$(document).ready(function() {
	initializePage();
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
