'use strict';

$(document).ready(function() {
	initializePage();
	
	$(function() {
			$(".myCard").each(function() {
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



$(window).on("scroll", function(){
        var scrollHeight = $(document).height();
        // var iCurScrollPos = $(window).scrollTop();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            // when scroll to bottom of the page
            $('#reach_the_end').addClass("show");
            // console.log($("#reach_the_end"))
            $("#reach_the_end")[0].style.display = "block";
            // $("#reach_the_end")[0].aria-hidden = "false";
     //        if ($("#reach_the_end")[0].style.display == "block") {
     //        	timer = setTimeout(function(){
     //        		$('#reach_the_end').removeClass("show");
					// $("#reach_the_end")[0].style.display = "none";
     //        	}, 2000)
     //        }
        }
        
    })

$('.close_end').click(function(){
	$('#reach_the_end').removeClass("show");
	$("#reach_the_end")[0].style.display = "none";
    // $("#reach_the_end")[0].aria-hidden = "true";
            
})


function initializePage() {
	// $(".round").click(checked);
	
	initCard();
}

function postCallback(res){
    
  }

function initCard() {


	var pressTimer1;

	$(".toTryCard").mouseup(function(){
		console.log("up");
	  clearTimeout(pressTimer1);
	  // Clear timeout
	  return false;
	}).mousedown(function(event){
		console.log("down");
	  // Set timeout
	  pressTimer1 = window.setTimeout(function() {
	   		var id = event.currentTarget.id.substr('block-'.length);
			// console.log($("#block-body-"+id)[0].style);
			// $("#block-"+id).addClass("disappear");
			$("#block-"+id)[0].style.display = "none";
			// $("#block-body-"+id)[0].style.display = "none";
			$.post('delete_from_my_list', {id: id}, postCallback);
		},500);

	  return false; 
	});


	var pressTimer2;

	$(".triedCard").mouseup(function(){
		console.log("up");
	  clearTimeout(pressTimer2);
	  // Clear timeout
	  return false;
	}).mousedown(function(event){
		console.log("down");
	  // Set timeout
	  pressTimer2 = window.setTimeout(function() {
	   		var id = event.currentTarget.id.substr('card-'.length);
			// console.log($("#block-body-"+id)[0].style);
			// $("#block-"+id).addClass("disappear");
			$("#card-"+id)[0].style.display = "none";
			// $("#block-body-"+id)[0].style.display = "none";
			$.post('delete_from_my_list', {id: id}, postCallback);
		},500);

	  return false; 
	});
	
	// $(function(){
	// 	$(".card").bind("taphold", tapholdHandler);
		
	// 	function tapholdHandler(event){
			// var id = event.currentTarget.id.substr('block-'.length);
			// console.log(id);
			// $(this).addClass("disappear");
			
	// 	}
	// });
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
