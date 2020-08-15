
$(document).ready(function () {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");
	var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie;
	}
	if (isIE()) {
		$('body').addClass('ie');
	}
	if (isMobile.any()) {
		$('body').addClass('touch');
	}

var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (isMobile.any()) { }

$('.wrapper').addClass('loaded');

var act = "click";
if (isMobile.iOS()) {
	var act = "touchstart";
}

function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();

//Клик вне области
$(document).on('click touchstart', function (e) {
	if (!$(e.target).is(".select *")) {
		$('.select').removeClass('active');
	};
});
let myVideo = $("#filevideo")[0];

$('.play').click(function () {
	if (myVideo.paused) {
		$(this).toggleClass('active');
		$('.block-video').toggleClass('active');
		$('.block-video__img').toggleClass('active');
		myVideo.play();

	}
});
$('#filevideo').click(function () {
	if (!myVideo.paused) {
		$('.play').toggleClass('active');
		$('.block-video').toggleClass('active');
		$('.block-video__img').toggleClass('active');
		myVideo.pause();
	}
});




//=============SWIPER SLIDER=========================
let mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	effect: 'coverflow',
	grabCursor: false,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 150,
		modifier: 3.2,
		slideShadows: true,
	},
	initialSlide: 3,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});
//================================================================
let mySwipers = new Swiper('.swiper-container-two', {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	initialSlide: 1,
	centeredSlides: true,
	navigation: {
		nextEl: '.swiper-button-next-two',
		prevEl: '.swiper-button-prev-two',
	},
	breakpoints: {
		767: {
			slidesPerView: 2,
			spaceBetween: 40,
			centeredSlides: false
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
			centeredSlides: true
		}
	}
});


});
