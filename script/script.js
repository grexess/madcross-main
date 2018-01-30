
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

$(document).ready(function () {

});

jQuery(window).on("load", function () {
  setButtonEqualWidth();
});