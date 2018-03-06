'use strict';


var timestamp1, timestamp2;


$(document).ready(function() {

	initializePage();
	$(function() {
			$(".card").each(function() {
				var hue = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')';
						$(this).css("background-color", hue);});
		});
    
	})


function initializePage() {
    timestamp1 = new Date().getTime();
    console.log(timestamp1);
    // ga('create','UA-93709601-3','auto');
}

    $('#trendingSort').click(function(event){
        timestamp2 = new Date().getTime();
        console.log(timestamp2);
        ga('create','UA-93709601-3','auto');
        ga('send', 'timing', 'add to my list', 'load', timestamp2-timestamp1);
        event.preventDefault();
        window.location ='/explore/trending';
        // $.post('/explore', {section: "trending"}, postCallback);
    });

    $('#newestSort').click(function(event){
        timestamp2 = new Date().getTime();
        console.log(timestamp2);
        ga('create','UA-93709601-3','auto');
        ga('send', 'timing', 'add to my list', 'load', timestamp2-timestamp1);
        event.preventDefault();
        window.location= '/explore/newest';
        // $.post('/explore', {section: "newest"}, postCallback);
    });

    $(window).on("unload", function(e) {
        timestamp2 = new Date().getTime();
        // console.log(timestamp2);
        ga('create','UA-93709601-3','auto');
        ga('send', 'timing', 'add to my list', 'load', timestamp2-timestamp1);
        // console.log("this will be triggered");
      });

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

        // for a/b testing
        ga('create','UA-93709601-3','auto');
        ga('send','event','add_to_my_list','click');

    });

function postCallback(res){
    
  }

var prevTemp = 0;

$(window).on("scroll", function(){
        var scrollHeight = $(document).height();
        // var iCurScrollPos = $(window).scrollTop();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        var temp = (scrollHeight - scrollPosition) / scrollHeight;

        // reach the end
        if ( temp === 0) {
            // when scroll to bottom of the page
            $('#reach_the_end').addClass("show");
            // console.log($("#reach_the_end"))
            $("#reach_the_end")[0].style.display = "block";
            // $("#reach_the_end")[0].aria-hidden = "false";
            // if ($("#reach_the_end")[0].style.display == "block") {
            //     setTimeout(function(){
            //         $('#reach_the_end').removeClass("show");
            //         $("#reach_the_end")[0].style.display = "none";
            //     }, 2000)
            // }

            // for a/b testing
            ga('create','UA-93709601-3','auto');
            ga('send','event','explore_percent','viewAll');

        } 

        if(temp < 0.25 && prevTemp > 0.25) {
            console.log("<0.25");

            // for a/b testing
            ga('create','UA-93709601-3','auto');
            ga('send','event','explore_percent','view0.75');

        }

        if(temp < 0.5 && prevTemp > 0.5) {
            console.log("<0.5");

            // for a/b testing
            ga('create','UA-93709601-3','auto');
            ga('send','event','explore_percent','view0.5');
        } 

        if(temp < 0.75 && prevTemp > 0.75) {
            console.log("<0.75");

            // for a/b testing
            ga('create','UA-93709601-3','auto');
            ga('send','event','explore_percent','view0.25');
        }
        
        prevTemp = temp;
    })

$('.close_end').click(function(){
    $('#reach_the_end').removeClass("show");
    $("#reach_the_end")[0].style.display = "none";
    // $("#reach_the_end")[0].aria-hidden = "true";
            
})


