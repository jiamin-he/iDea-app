'use strict';

$(document).ready(function() {
	initializePage();
	$(function() {
			$("section").each(function() {
				var hue = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')';
						$(this).css("background-color", hue);});
		});
	})

function initializePage() {
}

/* A function to return random number from min to max */

