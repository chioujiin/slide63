var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { assert, expect } = require("chai");
const { should } = require("mocha");

var jQuery = require('jquery')

describe("Select two images", function() {
  var top_rows;
  var bot_rows;
  before(function() {
    // top_rows = $(".row-1");
    // bottom_rows = $(".row-2");
    // return;
    return JSDOM.fromFile("./index.html").then((dom) => {
        global.document = dom.window.document;
        global.windom = document.defaultView;
        global.$ = jQuery(windom);
        top_rows = $(".row-1");
        bot_rows = $(".row-2");
    })
  });
  
  it("the borders turn green for two matching images", function (){
    // click image by id

    // $('#1').trigger('click');
    // $('#1').css('border-color').should.equal('yellow');
    // assert.equal($('#1').css('border-color'), 'yellow');
    // $('#1').css('border-color', 'yellow');
    // expect($('#1').attr('style')).eq('yellow');
    var img_id = 1;
    var selected_image_1 = top_rows.find(`#${img_id}`);
    var selected_image_2 = bot_rows.find(`#${img_id}`);
    $(selected_image_1).trigger("click");
    expect(selected_image_1.css("border-color")).eq("yellow");
    
    // $(selected_image_2).trigger("click");
    // expect(selected_image_1.css("border-color")).eq("rgb(124,252,0)");
    // expect(selected_image_2.css("border-color")).eq("rgb(124,252,0)");
  })
})