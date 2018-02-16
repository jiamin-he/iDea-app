'use strict';

$(document).ready(function() {
	initializePage();
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
