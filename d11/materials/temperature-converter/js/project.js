
// When the button is clicked, 
  // then grab the value of the input
  // convert it
  // put the new value into dom


$("button").on("click", function() {
  var celcius = $("input").val();
  var farenheit = celcius * 9/5 + 32;
  console.log(UserValue);
  $("converted").text("farenheit");

})