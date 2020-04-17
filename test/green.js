// var jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { assert, expect } = require("chai");
// const { should } = require("mocha");
// var jQuery = require('jquery')

var expect = chai.expect;

describe("Select two images", function() {
  var top_row;
  var bot_row;
  before(function() {
    top_row = $(".row-1");
    bot_row = $(".row-2");
    // return JSDOM.fromFile("./index.html").then((dom) => {
    //     global.document = dom.window.document;
    //     global.window = document.defaultView;
    //     global.$ = jQuery(window);
    //     top_rows = $(".row-1");
    //     bot_rows = $(".row-2");
    // })
  });
  
  it("the borders turn green for two matching images", function (){
    var img_id = 1;
    var selected_image_1 = top_row.find(`#${img_id}`);
    var selected_image_2 = bot_row.find(`#${img_id}`);
    $(selected_image_1).trigger("click");
    expect(`#${img_id}`).eq('#1')
    expect(selected_image_1.css("border-color")).eq("rgb(255, 255, 0)");
    
    $(selected_image_2).trigger("click");
    expect(selected_image_1.css("border-color")).eq("rgb(124, 252, 0)");
    expect(selected_image_2.css("border-color")).eq("rgb(124, 252, 0)");
  })
  
  it("the matching image will not turn yellow after clicking it", function (){
    var img_id = 4;
    var selected_image_1 = top_row.find(`#${img_id}`);
    var selected_image_2 = bot_row.find(`#${img_id}`);
    $(selected_image_1).trigger("click");
    expect(selected_image_1.css("border-color")).eq("rgb(255, 255, 0)");
    
    $(selected_image_2).trigger("click");
    expect(selected_image_1.css("border-color")).eq("rgb(124, 252, 0)");
    expect(selected_image_2.css("border-color")).eq("rgb(124, 252, 0)");
    
    $(selected_image_1).trigger("click");
    expect(selected_image_1.css("border-color")).not.eq("rgb(255, 255, 0)");
    expect(selected_image_1.css("border-color")).eq("rgb(124, 252, 0)");
  })
})