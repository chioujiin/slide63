
import * as Slide from '../slide63';

var assert = require('chai').assert;


describe("Matching", function() {
  var array_of_ids = [1,2,3,4,5];
  describe("border_turns_yellow", function() {

    function makeTest(x, matched) {
        var valueToRemove = x;
        var others = array_of_ids.filter(array_of_ids => array_of_ids !== valueToRemove);
        
      it(`turns the border color of id ${x} image to yellow if it is the only one`, function() {
          console.log(matched, x);
          if (matched[x] == true){
            assert.equal(Slide.border_turns_yellow(x, others, matched), "rgb(124,252,0)");
          }
          else{
            assert.equal(Slide.border_turns_yellow(x, others, matched), "yellow");
          }
        
      });
    }

    for (let x = 1; x <= 5; x++) {
      var matched = {}
      for (let i = 1;i<=5;i++) {
        matched[i] = Math.round(Math.random());
      }
      makeTest(x, matched);
    }
  });
  
  describe("Select two images", function() {
    it("the borders turn green for two matching images", function (){
      
    })
  })
  
  
});  

