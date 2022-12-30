$(function () {
 $(".sidebar-link").click(function () {
  $(".sidebar-link").removeClass("is-active");
  $(this).addClass("is-active");
 });
});

$(window)
 .resize(function () {
  if ($(window).width() > 1090) {
   $(".sidebar").removeClass("collapse");
  } else {
   $(".sidebar").addClass("collapse");
  }
 })
 .resize();

const allVideos = document.querySelectorAll(".video");


$(function () {
    $(".presentacion").on("click", function (e) {
    $(".main-container").removeClass("show");
    $(".main-container").scrollTop(0);
    $(".sidebar-link").removeClass("is-active");
    $(".presentacion").addClass("is-active");
    });
    $(".historia").on("click", function (e) {
    $(".main-container").addClass("show");
    $(".main-container").scrollTop(0);
    $(".sidebar-link").removeClass("is-active");
    $(".historia").addClass("is-active");
    });
    $(".contacto").on("click", function (e) {
    $(".main-container").removeClass("show");
    $(".main-container").scrollTop(0);
    $(".sidebar-link").removeClass("is-active");
    $(".contacto").addClass("is-active");
    $(".otra-clase").addClass("show");
    });
    });
