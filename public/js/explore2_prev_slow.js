$(document).ready(function() {

  var animating = false;
  var cardsCounter = 0;
  var numOfCards = 10;
  var decisionVal = 80;
  var pullDeltaX = 0;
  var deg = 0;
  var $card, $cardReject, $cardLike;
  var numsOfLike = 0;

  // ga('create','UA-93709601-3','auto');


  // $(function() {
  //     $(".demo_card").each(function() {
  //       var hue = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')';
  //           $(this).css("background-color", hue);});
  // });

  // assign numOfCards
  // jQuery.ajaxSetup({async:false});
  // $.get('/getNums', function(res){
  //   // console.log(res);
  //   numOfCards = res;
  // })
  // jQuery.ajaxSetup({async:true});

  // console.log(numOfCards);

  function pullChange() {
    animating = true;
    deg = pullDeltaX / 10;
    $card.css("transform", "translateX("+ pullDeltaX +"px) rotate("+ deg +"deg)");

    var opacity = pullDeltaX / 100;
    var rejectOpacity = (opacity >= 0) ? 0 : Math.abs(opacity);
    var likeOpacity = (opacity <= 0) ? 0 : opacity;
    $cardReject.css("opacity", rejectOpacity);
    $cardLike.css("opacity", likeOpacity);
  };

  function postCallback(res){
    
  }

  function release() {

    if (pullDeltaX >= decisionVal) {
      $card.addClass("to-right");
      var id = $card.attr('id');
      // console.log(id);
      $.post('add_to_my_list', {id: id}, postCallback);
      numsOfLike++;

    } else if (pullDeltaX <= -decisionVal) {
      $card.addClass("to-left");
    }

    if (Math.abs(pullDeltaX) >= decisionVal) {
      $card.addClass("inactive");

      setTimeout(function() {
        $card.addClass("below").removeClass("inactive to-left to-right");
        cardsCounter++;
        if (cardsCounter === numOfCards) {
          cardsCounter = 0;
          $(".demo__card").removeClass("below");

          // pop up tips window (have reached the end)
          $('#reach_the_end').addClass("show");
          $("#reach_the_end")[0].style.display = "block";

        }
      }, 300);
    }

    if (Math.abs(pullDeltaX) < decisionVal) {
      $card.addClass("reset");
    }

    setTimeout(function() {
      $card.attr("style", "").removeClass("reset")
        .find(".demo__card__choice").attr("style", "");

      pullDeltaX = 0;
      animating = false;
    }, 300);
  };

  $(".demo").on("mousedown touchstart", ".demo__card:not(.inactive)", function(e) {
    if (animating) return;

    $card = $(this);
    $cardReject = $(".demo__card__choice.m--reject", $card);
    $cardLike = $(".demo__card__choice.m--like", $card);
    var startX =  e.pageX || e.originalEvent.touches[0].pageX;

    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      pullDeltaX = (x - startX);
      if (!pullDeltaX) return;
      pullChange();
    });

    $(document).on("mouseup touchend", function() {
      $(document).off("mousemove touchmove mouseup touchend");
      if (!pullDeltaX) return; // prevents from rapid click events
      release();
    });
  });

  $('.fixed_bottom').click(function(event) {
      timestamp2 = new Date().getTime();
      ga('create','UA-93709601-3','auto');
      ga('send', 'timing', 'add to my list', 'load', timestamp2-timestamp1);

      // for a/b testing
      for(var i = 0; i < numsOfLike; i++){
        ga('create','UA-93709601-3','auto');
        ga('send','event','add_to_my_list','click');
      }
      
  });


  $('.top_right_button').click(function(event) {
      timestamp2 = new Date().getTime();
      ga('create','UA-93709601-3','auto');
      ga('send', 'timing', 'add to my list', 'load', timestamp2-timestamp1);

      // for a/b testing
      for(var i = 0; i < numsOfLike; i++){
        ga('create','UA-93709601-3','auto');
        ga('send','event','add_to_my_list','click');
      }
  });

});

// close the pop up tips window
$('.close_end').click(function(){
  $('#reach_the_end').removeClass("show");
  $("#reach_the_end")[0].style.display = "none";
    // $("#reach_the_end")[0].aria-hidden = "true";
            
})