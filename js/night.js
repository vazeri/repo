'use strict';
$(document).ready(function() {
  $(".yoke").click(function() {
    if ($(".pg").hasClass("night")) {
      $(".pg").removeClass("night");
      $(".box").removeClass("boxedin");
      $(".switch").removeClass("switchedin");
      $(".te").removeClass("teedin");
      $(".pg").addClass("day");
      $(".yoke").addClass("unyoked");
      $(".box").addClass("boxedout");
      $(".switch").addClass("switchedout");
      $(".te").addClass("teedout");
    } else {
      $(".yoke").removeClass("unyoked");
      $(".switch").removeClass("switchedout");
      $(".te").removeClass("teedout");
      $(".pg").removeClass("day");
      $(".box").removeClass("boxedout");
      $(".yoke").addClass("yoked");
      $(".pg").addClass("night");
      $(".box").addClass("boxedin");
      $(".switch").addClass("switchedin");
      $(".te").addClass("teedin");
    }
  });
}); //#f44327 really awesome red