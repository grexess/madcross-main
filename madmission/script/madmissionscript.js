var hoverbild;
$(function() {
	
	hoverbild = document.querySelector("figure.snip0016");
	hoverbild.ontouchstart = function() {
		this.querySelector("figcaption").classList.add("fadeInOnTouch");
	}

	hoverbild.ontouchend = function() {
		this.querySelector("figcaption").classList.remove("fadeInOnTouch");
	}

	//navtargets
	$(".navtarget").on("click", function () {
	   window.open($(this)[0].dataset.nav,$(this)[0].dataset.target);
    });

});

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
	var x = document.getElementById("navDemo");
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}