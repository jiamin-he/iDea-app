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

function postCallback(res){
    
  }

$('.top_right_button_card').click(function(event){
    event.preventDefault();
    // window.location.href = "/add_to_my_list";
    var id = event.currentTarget.id
    var isNewest = id.includes("newest")
    id = isNewest? id.substr('top_right_button_newest_'.length):id.substr('top_right_button_trending_'.length);;
    // console.log(event);
    $.post('add_to_my_list', {id: id}, postCallback);
    // $(this).find('i').toggleClass('fas fa-minus fa-lg')
    // console.log($("#block-"+id));
    var block = "#block-" +(isNewest?"newest-":"trending-")  + id;
    // console.log(block);
    $(block)[0].style.display = "none";

});