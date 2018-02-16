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
	$(".round").click(checked);
}

function checked(e) {
	// x.toggleClass('step-backward');
	// x.classList.toggle("fa-thumbs-down");
	e.preventDefault();
	var projectID = $(this).closest('.myCard').attr('id');
	var idNumber = projectID.substr('project'.length);
	console.log(idNumber);
	var checkBox = document.getElementById(idNumber);
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}
