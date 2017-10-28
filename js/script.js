$('.owl-carousel').owlCarousel({
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