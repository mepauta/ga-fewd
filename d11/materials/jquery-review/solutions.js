
$("div.Box1").on("click", function() {
  $(".Box1").css("height", "500px");
  $(".Box1").css("width", "500px");
  console.log("boxchange");
})

$("div.Box2").on("click", function() {
  $(".Box2").css("height", "500px");
  $(".Box2").css("width", "500px");
  console.log("boxchange2");
})

$("div").text("woot");
// The above writes text in the divs
// div.css("background-color", "pink")
