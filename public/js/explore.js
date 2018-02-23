'use strict';

$(document).ready(function() {
	initializePage();
	$(function() {
			$(".card").each(function() {
				var hue = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')';
						$(this).css("background-color", hue);});
		});
	})

function initializePage() {
}

$('.top_right_button_card').click(function(){
    window.location.href = "/add_to_my_list";
    $(this).find('i').toggleClass('fas fa-minus fa-lg')
});