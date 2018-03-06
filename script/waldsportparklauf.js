$(function () {
  $(".w3-card-4").hover(
    function () {
      $(this)
        .find("header")
        .removeClass("w3-blue")
        .addClass("w3-green");
      $(this)
        .find(".w3-container")
        .addClass("w3-blue");
    },
    function () {
      $(this)
        .find("header")
        .removeClass("w3-green")
        .addClass("w3-blue");
      $(this)
        .find("div.w3-container").removeClass("w3-blue");
    }
  );

});

function myMap() {


  var mapCanvas = document.getElementById("map");
  var myLatLng = { lat: 50.693491, lng: 13.491614 };
  
  var mapOptions = {
    center: new google.maps.LatLng(myLatLng),
    zoom: 13,
    disableDefaultUI: true
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Waldsportpark Cämmerswalde'
  });
}
