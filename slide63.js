// function called when a div is selected, check if only one and turn yellow

$(document).ready(function () {
  var clicked = [];
  var matched = {1:false, 2:false, 3:false, 4:false, 5:false};
  $(".box").click(function(){                 
    Matching(this, clicked, matched);
  });

});