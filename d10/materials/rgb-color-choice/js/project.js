//When button is clicked
// grab the value of the inputs for each
//change the background color

// there are three inputs
// each input will have to add to one rgb code

//background-color

$("a").on("click", function() {
  var red = $("#red").val (); 
  var green = $("#green").val();
  var blue = $ ("#blue").val();
  // console.log(blue);
  var rgb = "red (") + "," +  green + "," + blue ;
  // console.log(rgb);
  $("#wrapper").css("background-color", rgb)
 })


check 