// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$("#first").on("click", function() {
   //console.log("click");
   $("#expand").attr("src", "img/1.jpg");
})

$("#second").on("click", function() {
   
   $("#expand").attr("src", "img/2.jpg");
})

$("#third").on("click", function() {
   //console.log("click");
   $("#expand").attr("src", "img/3.jpg");
})

$("#fourth").on("click", function() {
   //console.log("click");
   $("#expand").attr("src", "img/4.jpg");
})


//figure does not have the source "SRC" attribute so you cant pull the image on there. 
//that is why you had to give it a rule. 

//$("figure").attr("src", "http://2.gravatar.com/avatar/82906f474d6b29c9acbee0c231774332?s=256&d=retro&r=g"); FROM CAT EXAMPLE