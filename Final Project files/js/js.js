$(".owl-carousel").owlCarousel({
  loop: true,
  center: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
});

// $(".dropdown").hide();


$(".Resume").on("click", function() {
  $(".Resume-dd").toggle();
})

$(".Resume").on("focusout", function() {
  $(".Resume-dd").hide();
})



//jquery function to download PDF

//Focus out is when you dont want the focus to be on the button that was clicked once you have clicked on something else. 

//$(".edit").on("click", function() {
//   console.log ("click");
//  $(".dropdown2").toggle();
//});

//  //$(".file").css ("focus", "pink");
//  $(".dropdown2").hide();
//})