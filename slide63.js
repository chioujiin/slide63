$(document).ready(function () {
  var clicked = [];
  var matched = {};
  $(".box").click(function(){
    Matching(this, clicked, matched);
  });
});