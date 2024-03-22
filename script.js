//spinner loading
const spinnerWrapper1 = document.querySelector(".spinner-wrapper");

window.addEventListener("load", () => {
  spinnerWrapper1.style.opacity = "0";
        
  setTimeout(() => {
      spinnerWrapper1.style.display ="none";
    }, 200)
});


// Get the button
var mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$(document).ready(function(){
  // Add smooth scrolling on all links inside the navbar
  $(".navbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // Add scrollspy to navbar
  $('body').scrollspy({target: ".navbar", offset: 100});

  // Add active class to navbar links on scroll
  $(".navbar-nav a").on('click', function() {
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});
