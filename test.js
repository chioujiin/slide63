  describe("border_turns_yellow", function() {

    function makeTest(x, others, matched) {        
      it(`turns the border color of id ${x} image to yellow if it is the only one`, function() {
          console.log(matched, x);
          if (matched[x] == true){
            assert.equal(border_turns_yellow(x, others, matched), "rgb(124,252,0)");
          }
          else{
            assert.equal(border_turns_yellow(x, others, matched), "yellow");
          }
        
      });
    }

    for (let x = 1; x <= 5; x++) {
      matched = {}
      for (let i = 1;i<=5;i++) {
        matched[i] = Math.round(Math.random());
      }
      array_of_ids = [1,2,3,4,5];
      valueToRemove = x;
      for (let i = 1;i<=5;i++) {
        if(i==x){
          continue;
        }
        else{
          if(Math.random()>0.5){
            others.push(i);
          }
        }
      }

      makeTest(x, others, matched);
    }
  
});
