'use strict';

$(document).ready(function() {
	initializePage();
	$(function() {
			$("section").each(function() {
				var hue = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')';
						$(this).css("background-color", hue);});
		});

	// if I click the "tried" button...(use "form" type instead)
	// $(".tried").click(function(){
	// 	var triedId = $(this).attr("id");
	// 	var id = triedId.substr('tried-'.length);
	// 	var blockId = document.getElementById(id);
	// 	// to the tried url, update the database.
	// 	// window.location.href='/idea/tried/'+triedId.substr('tried-'.length);

	// 	// to hide or show
	// 	// if(blockId.style.display === "none") {
	// 	// 	blockId.style.display = "block";
	// 	// } else {
	// 	// 	window.location.href='/idea/tried/'+triedId.substr('tried-'.length);
	// 	// }
	// });
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

$('#reflectionModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  // var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  // modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-title').text('Add note/ reflection:');
  // modal.find('.modal-body input').val(recipient)
})
