
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

global.$ = global.jquery = require('jquery')(window);

// console.log(Slide)
var Slide = require('./../my_modules/utils.js');
var border_turns_yellow = Slide.border_turns_yellow;
var chai = require("chai");
var assert = chai.assert;

describe("Matching", function() {
  var array_of_ids = [1,2,3,4,5];
  describe("border_turns_yellow", function() {

    function makeTest(x, matched) {
        var valueToRemove = x;
        var others = array_of_ids.filter(array_of_ids => array_of_ids !== valueToRemove);
        
      it(`turns the border color of id ${x} image to yellow if it is the only one`, function() {
          console.log(matched, x);
          if (matched[x] == true){
            assert.equal(border_turns_yellow(x, others, matched), "rgb(124,252,0)");
          }
          else{
            assert.equal(border_turns_yellow(x, others, matched), "yellow");
            expect(1).to.eq(3);
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
  
  // describe("Select two images", function() {
  //   before(function() {
  //     var questions = $(".row-1").children();
  //     var anwers = $(".row-2").children();
  //     questions.css("border-color", "red")
  //     console.log(questions.css("border-color")=="red");
  //   });
    
  //   it("the borders turn green for two matching images", function (){
      
  //   })
  // })
  
  
});  

