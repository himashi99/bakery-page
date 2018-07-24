var ypos;
var image1;
function parallax1() {
  ypos = window.pageYOffset;
  image1 = document.getElementById("background1");
  image1.style.top = ypos * -0.2 + 'px';
}
window.addEventListener('scroll', parallax1);

var image2;
function parallax2() {
  ypos = window.pageYOffset;
  image2 = document.getElementById("about-us");
  image2.style.top = ypos * -0.4 + 'px';
}
window.addEventListener('scroll', parallax2);


function parallax3() {
  var image3;
  var d = document.getElementById("background2");
  var topPos = d.offsetTop;

  image3 = document.getElementById("background2");
  image3.style.top = topPos * -0.5 + 'px';
}
window.addEventListener('scroll', parallax3);

// function parallax4() {
//   var image4;
//   var e = document.getElementById("gallery-scroll");
//   var topPos2 = e.offsetTop;
//
//   image4 = document.getElementById("gallery-scroll");
//   image4.style.top = topPos2 * -0.1 + 'px';
// }
// window.addEventListener('scroll', parallax4);

var image4;
function parallax4() {
  ypos = window.pageYOffset;
  image4 = document.getElementById("gallery-scroll");
  image4.style.top = ypos * -0.5 + 'px';
}
window.addEventListener('scroll', parallax4);


$(function() {
  $('#yoyo').hover(function() {
    $(this).fadeTo(400,.6);
    $("#overlay-toggle").removeClass("show-me");
  }, function() {
    $(this).fadeTo(400,1);
    $("#overlay-toggle").addClass("show-me");
  });
});
