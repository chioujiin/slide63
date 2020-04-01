function Matching(id, clicked, matched){
  // border_turns_yellow
  if(clicked.length==0 || clicked[0] == id){
    border_turns_yellow(id, clicked);
  }
}


function border_turns_yellow(id, clicked) { 
  console.log(id, clicked)
  if(clicked.length==0){
    $(id).css('border-color', 'yellow');
    clicked.push(id);
    // return "yellow"
  }
  else if(clicked[0] == id){
    $(clicked[0]).css('border-color', 'black');
    clicked.pop();
    // return "black"
  }
  else{
    // border_turns_red()
    // return "red"
  }
}

function check_if_match(id){      
//   if (clicked[0].innerHTML == $(id).attr("id")){                
//     matched[clicked[0].innerHTML] = true;
//     clicked.shift();
//     return true
//   }
//   else{
//     return false
//   }
}

// when images match, call this function for border changes
function border_turns_green(id1, id2){
  // return "rgb(124,252,0)";
}

// when images doesn't match, call this function for border changes
function border_turns_red(id1, id2){
  // return "red"
}