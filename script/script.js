$(function () {
  $(".spring").click(function () {
      $(".nav").hide();
      $(".navSpring").show();
  }).mouseenter(function () {
      $('body').css({
          background: "-webkit-gradient(linear, left top, left bottom, from(#ccc), to(#000))"
      })
  }).mouseleave(function () {
      $('body').css({
          background: "linear-gradient(-180deg, white, rgba(0, 217, 255, 0.877))"
      })
  });
  $(".sommer").click(function () {
      $(".nav").hide();
      $(".navSommer").show();
  }).mouseenter(function () {
      $('body').css({
          background: "-webkit-gradient(linear, left top, left bottom, from(#ccc), to(#000))"
      })
  }).mouseleave(function () {
      $('body').css({
          background: "linear-gradient(-180deg, white, rgba(0, 217, 255, 0.877))"
      })
  });
  $(".autumn").click(function () {
      $(".nav").hide();
      $(".navAutumn").show();
  }).mouseenter(function () {
      $('body').css({
          background: "-webkit-gradient(linear, left top, left bottom, from(#ccc), to(#000))"
      })
  }).mouseleave(function () {
      $('body').css({
          background: "linear-gradient(-180deg, white, rgba(0, 217, 255, 0.877))"
      })
  });
  $(".winter").click(function () {
      $(".nav").hide();
      $(".navWinter").show();
  }).mouseenter(function () {
      $('body').css({
          background: "-webkit-gradient(linear, left top, left bottom, from(#ccc), to(#000))"
      })
  }).mouseleave(function () {
      $('body').css({
          background: "linear-gradient(-180deg, white, rgba(0, 217, 255, 0.877))"
      })
  });
});


function setButtonEqualWidth() {
  var choices = document.getElementsByClassName("btn");
  var maxWidth = 0;
  // read
  for (i = 0; i < choices.length; ++i) {
    maxWidth = Math.max(maxWidth, choices[i].offsetWidth)
  };

  // write
  for (i = 0; i < choices.length; ++i) {
    choices[i].style.width = maxWidth + "px";
  };
}

function initializeIntro(){
    $(".Zn, .Sm, .Ch, .Ot").on("click", function() {      
        $(".menu")
            // Remove all classes
            .removeClass()
            // Put back .primary-color class + the clicked elements class with the added prefix "pm_".
            .addClass('menu pm_' + $(this).attr('class') );       
    });
return(false);
}


$(document).ready(function () {
    initializeIntro()
});

jQuery(window).on("load", function () {
 //setButtonEqualWidth();
});