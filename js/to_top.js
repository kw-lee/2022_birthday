//Get the button
var mybutton = document.getElementById("myBtn");
var mybutton2 = document.getElementById("myBtn2");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton2.style.display = "block";
  } else {
    mybutton.style.display = "none";
    mybutton2.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  document.getElementById('the_top').scrollIntoView({behavior: 'smooth'});
}

function gotoinFunction() {
  document.getElementById('donate').scrollIntoView({behavior: 'smooth'});
}