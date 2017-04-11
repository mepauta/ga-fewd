// $(".dropdown").hide();


$(".file").on("click", function() {
  //$(".file").css ("focus", "pink");
  $(".dropdownfile").toggle();
})

$(".file").on("focusout", function() {
  //$(".file").css ("focus", "pink");
  $(".dropdownfile").hide();
})


//Focus out is when you dont want the focus to be on the button that was clicked once you have clicked on something else. 

$(".edit").on("click", function() {
//   console.log ("click");
  $(".dropdown2").toggle();
});

$(".edit").on("focusout", function() {
  //$(".file").css ("focus", "pink");
  $(".dropdown2").hide();
})