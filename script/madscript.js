var myIndex = 0;

$(function () {

    addParticipationConditions();

});

function addParticipationConditions() {

    var container = $("#condition");
    
    var element;
    $.each(conditions, function (key, value) {
        element = $("<div class=\"w3-card w3-round w3-white w3-center\"><div class=\"w3-container\"><p class=\"w3-theme-d1\"><strong>"+ value.title +"</strong></p><p>" + value.desc + "</p></div></div><br>");
        $("#condition").append(element);
    });
}



function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

// Accordion
function myFunction(id) {

    var x = $("#" + id);
    var y = $("#ic" + id);

    if (x.hasClass("w3-show")) {
        x.removeClass("w3-show").addClass("w3-hide");
        //x.prev().removeClass("w3-theme-d1").addClass("w3-theme-d4");
        y.removeClass("fa-caret-down").addClass("fa-caret-right");
    } else {
        x.removeClass("w3-hide").addClass("w3-show");
        //x.prev().removeClass("w3-theme-d4").addClass("w3-theme-d1");
        y.removeClass("fa-caret-right").addClass("fa-caret-down");
    }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


function myMap() {


    var mapCanvas = document.getElementById("map");
    var myLatLng = { lat: 50.751865, lng: 13.639060 };

    var mapOptions = {
        center: new google.maps.LatLng(myLatLng),
        zoom: 15,
        disableDefaultUI: true
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'MadEast Hermsdorf'
    });
}