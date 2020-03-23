// function called when a div is selected, check if only one and turn yellow
var clicked = [];
var matched = {1:false, 2:false, 3:false, 4:false, 5:false};
$(document).ready(function () {

  $(".box").click(function(){                 
    border_turns_yellow(this, clicked, matched);   
  });

});

function border_turns_yellow(id, clicked, matched) { 
  if(matched[id] == true){
    return
  }
  else if(clicked.length>0){          
    if(check_if_match(id)){
      // matching()
    }
    else{            
        // border_turns_red()
    }
  }
  else{
    $(id).css('border-color', 'yellow');
    clicked.push(id);
  }
}

function check_if_match(id){      
  if (clicked[0].innerHTML == $(id).attr("id")){                
    matched[clicked[0].innerHTML] = true;
    clicked.shift();
    return true
  }
  else{
    return false
  }
}

// when images match, call this function for border changes
function border_turns_green(id1, id2){
  // return "rgb(124,252,0)";
}

// when images doesn't match, call this function for border changes
function border_turns_red(id1, id2){
  // return "red"
}