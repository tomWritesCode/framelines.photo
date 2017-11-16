$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 2
		},
		1000: {
			items: 2
		}
	}
});

document.querySelector(".owl-next").innerHTML = "Next >";
document.querySelector(".owl-prev").innerHTML = "< Previous";

// MOBILE MENU OPEN AND CLOSE - DO NOT ALTER!!
function menuOpenClose() {
	// OPEN MENU FUNCTION
	if (
		document
			.getElementById("menuSlide")
			.classList.contains("menuMobile" && "slideMenuOpen")
	) {
		document.getElementById("menuSlide").classList.add("menuMobileOpen");
		document.getElementById("x").classList.add("xClose");
		document.getElementById("y").classList.add("yClose");
		document.getElementById("z").classList.add("zClose");
		document.getElementById("background").classList.add("backgroundOn");
		document.getElementById("menuSlide").classList.remove("slideMenuOpen");
		document.querySelector("body").style.overflow = "hidden";
		console.log("That menu open is smooth, am I right?");
	} else {
		// CLOSE MENU FUNCTION
		document.getElementById("menuSlide").classList.remove("menuMobileOpen");
		document.getElementById("x").classList.remove("xClose");
		document.getElementById("y").classList.remove("yClose");
		document.getElementById("z").classList.remove("zClose");
		document.getElementById("background").classList.remove("backgroundOn");
		document.getElementById("menuSlide").classList.add("slideMenuOpen");
		document.querySelector("body").style.overflow = "auto";
		console.log("Yeah, the close is just as smooth.");
	}
}

//  menuOpenClose();

document.getElementById("menuBtn").addEventListener("click", function() {
	menuOpenClose();
});

document.getElementById("background").addEventListener("click", function() {
	menuOpenClose();
});

function showBackToTop() {
	var scrolledDown = window.pageYOffset;
	// console.log (scrolledDown);
	if (scrolledDown > window.innerHeight - 5) {
		document
			.getElementById("backToTop")
			.setAttribute("style", "display:block;");
	} else {
		document
			.getElementById("backToTop")
			.setAttribute("style", "animation:fade;");
	}
}
window.addEventListener("scroll", showBackToTop);
