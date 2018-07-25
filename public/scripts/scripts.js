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

var image4;
function parallax4() {
  ypos = window.pageYOffset;
  image4 = document.getElementById("gallery-scroll");
  image4.style.top = ypos * -0.5 + 'px';
}
window.addEventListener('scroll', parallax4);

function parallax5() {
  var image5;
  var f = document.getElementById("background3");
  var topPos = f.offsetTop;

  image5 = document.getElementById("background3");
  image5.style.top = topPos * -0.5 + 'px';
}
window.addEventListener('scroll', parallax5);

var image6;
function parallax6() {
  ypos = window.pageYOffset;
  image6 = document.getElementById("testimonials-scroll");
  image6.style.top = ypos * -0.8 + 'px';
}
window.addEventListener('scroll', parallax6);

var image7;
function parallax7() {
  ypos = window.pageYOffset;
  image7 = document.getElementById("contact-scroll");
  image7.style.top = ypos * -0.4 + 'px';
}
window.addEventListener('scroll', parallax7);

// // init controller
// 						var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
// 						// build scenes
// 						new ScrollMagic.Scene({triggerElement: "#parallax1"})
// 										.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
// 										.addIndicators()
// 										.addTo(controller);
// 						new ScrollMagic.Scene({triggerElement: "#parallax2"})
// 										.setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
// 										.addIndicators()
// 										.addTo(controller);
// 						new ScrollMagic.Scene({triggerElement: "#parallax3"})
// 										.setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
// 										.addIndicators()
// 										.addTo(controller);


$(function() {
  $('#yoyo').hover(function() {
    $(this).fadeTo(400,.6);
    $("#overlay-toggle").removeClass("show-me");
  }, function() {
    $(this).fadeTo(400,1);
    $("#overlay-toggle").addClass("show-me");
  });
});
