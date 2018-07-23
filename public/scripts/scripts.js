// var ypos;
// var image;
// function parallax1() {
//   ypos = window.pageYOffset;
//   image = document.getElementById("description");
//   image.style.top = ypos * 0.2 + 'px';
// }
// window.addEventListener('scroll', parallax1);
// 
// function parallax2() {
//   ypos = window.pageYOffset;
//   image = document.getElementById("background1");
//   image.style.top = ypos * 0.2 + 'px';
// }
// window.addEventListener('scroll', parallax2);

// function parallax3() {
//   ypos = window.pageYOffset;
//   image = document.getElementById("about-us");
//   image.style.top = ypos * 0.2 + 'px';
// }
// window.addEventListener('scroll', parallax3);

$(function() {
  $('#yoyo').hover(function() {
    $(this).fadeTo(400,.6);
    $("#overlay-toggle").removeClass("show-me");
  }, function() {
    $(this).fadeTo(400,1);
    $("#overlay-toggle").addClass("show-me");
  });
});
