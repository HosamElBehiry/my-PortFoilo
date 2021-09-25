$(document).ready(function () {
  /*Start Specifying Header height */
  $("header > .container-fluid").height($(window).innerHeight());
  /*End Of Specifying Header height */

  /*Specifying Cont-box right */
  $(".cont-box").css("right", -$(".cont-box").width());
  /*End Of Specifying Cont-box right */

  /*Start Of Auto Text Typing */
  let i = 0,
    j = 0,
    txt = $("header .my-job").data("job")[j],
    x = "";
  setInterval(function () {
    if (i < txt.length) {
      x += txt.charAt(i);
      $("header .my-job").text(x);
      i++;
    } else {
      x = "";
      j = (j + 1) % $("header .my-job").data("job").length;
      i = 0;
      txt = $("header .my-job").data("job")[j];
    }
  }, 150);
  /*End Of Auto Text Typing */

  $(".menu-bar-box").on("click", function () {
    $(".cont-box .cont").height($(window).height());
    $(".cont-box").animate(
      {
        right: 0,
      },
      1000
    );
  });

  /*Start Close ul using close mark */
  $(".close-list").on("click", function () {
    $(".cont-box").animate(
      {
        right: -$(".cont-box").width(),
      },
      1000
    );
  });
  /*End Of Close ul using close mark */

  /*Start Controlling on Nav Bar */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 10) {
      $("header ul").css("background-color", "white");
      $("header ul li a.active").css("color", "#96bb7c");
      $("header ul li a").hover(
        function () {
          $(this).css("color", "#96bb7c");
        },
        function () {
          if (!$(this).hasClass("active")) {
            $(this).css("color", "#000");
          }
        }
      );
    } else {
      $("header nav ul").css("background-color", "transparent");
      $("header nav ul li a.active").css("color", "#fff");
      $("header nav ul li a").hover(
        function () {
          $(this).css("color", "#fff");
        },
        function () {
          if (!$(this).hasClass("active")) {
            $(this).css("color", "#000");
          }
        }
      );
    }
  });
  /*End Controlling on Nav Bar */
  /* Start Controlling Portfolio's section */
  $(".portfolio-index li").on("click", function () {
    if ($(this).data("target") == "all") {
      $(".my-photos li").fadeIn(500);
    } else {
      $(".my-photos li").fadeOut(500);
      $(`.my-photos li.${$(this).data("target")}`).fadeIn(500);
    }
  });
  /* End Controlling Portfolio's section */

  /*Dealing With links On nav */
  $("body").on("click", "header ul li a", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .children()
      .removeClass("active")
      .removeAttr("style");
    $("html, body").animate(
      {
        scrollTop:
          $(`.${$(this).data("val")}`).offset().top -
          $("header ul").outerHeight(true),
      },
      200
    );
  });
  /*Dealing With links On nav*/

  /*Make arrow More Dynamic */
  $(".val-perc").each(function () {
    $(this).css(
      "right",
      $(this)
        .siblings(".arrow")
        .css("right")
        .slice(0, $(this).siblings(".arrow").css("right").length - 2) - 13
    );
  });
  /*End Of Making arrow More Dynamic */

  /*Controlling of my portfoilo list-style */
  $(".my-portfoilo ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  /*End Of Controlling of my portfoilo list-style */
});
