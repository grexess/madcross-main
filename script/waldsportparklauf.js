$(function() {
    $(".w3-card-4").hover(
      function() {
        $(this)
          .find("header")
          .removeClass("w3-blue")
          .addClass("w3-green");
        $(this)
          .find(".w3-container")
          .addClass("w3-blue");
      },
      function() {
        $(this)
          .find("header")
          .removeClass("w3-green")
          .addClass("w3-blue");
       $(this)
          .find("div.w3-container").removeClass("w3-blue");
      }
    );
  });
  