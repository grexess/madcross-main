var currBackColor = "#151515"
bInitial = true;

$(function () {
    $(".Zn, .Sm, .Ch, .Ot").on("click", function () {
        bInitial = false;
        $(".menu")
            // Remove all classes
            .removeClass()
            // Put back .primary-color class + the clicked elements class with the added prefix "pm_".
            .addClass('menu pm_' + $(this).attr('class'));
        $(".clickBtn").css("background-color", $(this)[0].dataset.color);
        switchNavContainer($(this)[0].dataset.nav);
    }).hover(function () {
        if (!bInitial) {
            currBackColor = $(".header").css("background-color");
        }
        //$(".nav").hide();
        //$(".header").css("background-color", $(this)[0].dataset.color);
    }, function () {
        //$(".header").css("background-color", currBackColor);
    });
    $(".Middle").on("click", function () {
        $(".header").css("background-color", "#151515");
        switchNavContainer("navIntro");
    });

    $(".calendar").hover(

        function() {
            $(".desccontainer").show("1000");
          }, function() {
            $(".desccontainer").hide("slow");
          }

    );

});

function switchNavContainer(elem) {
    $(".nav").hide();
    $("." + elem).show();
}

