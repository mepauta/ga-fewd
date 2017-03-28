// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()


// If you define the var on the outside , then when you define the outnumber within the rule, it will run that specific rule and add to whatever was initially run.

// Use $ when you are using a selector and want to assign something for it. In this case, you are changing the text of the outNumber.

// we use .val whenever we are inputing a number. in this case, this is just text and you are adding to it. 
var outNumber = 0;

$("#a10").on("click", function() {
  // console.log("click");
  outNumber = outNumber + 10;
  $("#out").text(outNumber);
})



$("#a20").on("click", function() {
  // console.log("click");
  outNumber = outNumber + 20;
  $("#out").text(outNumber);
})

$("#a30").on("click", function() {
  // console.log("click");
  outNumber = outNumber + 30;
  $("#out").text(outNumber);
})

$("#n10").on("click", function() {
  // console.log("click");
  outNumber = outNumber - 10;
  $("#out").text(outNumber);
})

$("#n20").on("click", function() {
  // console.log("click");
  outNumber = outNumber - 20;
  $("#out").text(outNumber);
})

$("#n30").on("click", function() {
  // console.log("click");
  outNumber = outNumber - 30;
  $("#out").text(outNumber);
})



$("#red").on("click", function() {
  // console.log("click"); 
  $("#out").css("background-color", "red")
})
/*
$("#blue").on("click", function() {
  // console.log("click");
})

$("#out").on("click", function() {
  // console.log("click");
  var reset = $("out")
})
*/