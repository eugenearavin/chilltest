
function parallax() {
  var scrolled = $(window).scrollTop();
  $(".parallax").css("margin-top", -(scrolled * 0.5));
}

$(window).scroll(function(e) {
  parallax();
});

$(document).ready(function(){
  $('.impact__slider').slick({
    dots: true,
    fade: true,
  });
});

$(function() {
	$("#my-menu").mmenu({
        extensions: ['effect-menu-slide', 'pagedim-black'],
        navbar: {
        	title: '<img src="../img/logo.png" alt="logo">'
        }
      });

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}


document.getElementById("item-hover").addEventListener("mouseover", mouseOver);
document.getElementById("item-hover").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("submenu-wrapper").style.top = "93px";
}

function mouseOut() {
  document.getElementById("submenu-wrapper").style.top = "-200px";
}

document.getElementById("item-hover_2").addEventListener("mouseover", mouseOver_2);
document.getElementById("item-hover_2").addEventListener("mouseout", mouseOut_2);


function mouseOver_2() {
  document.getElementById("submenu-wrapper_2").style.top = "93px";
}

function mouseOut_2() {
  document.getElementById("submenu-wrapper_2").style.top = "-400px";
}

$(document).ready(function(){
  $('.main__slider').slick({
    dots: true,
    fade: true,
  });
});



$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function langFunction() {
  var element = document.getElementById("dropdown-content");
  element.classList.toggle("land__dispaly");

}


