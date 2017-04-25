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

var ad = [
  {
    account: "Belvedere",
    photo: "http://s2.insidehook.com/Belvedere_300_1399234350.jpg"
  },
  {
    account: "Bvlgari",
    photo: "http://www.luxos.com.pt/wp-content/uploads/2015/07/Bvlgari-Goldea-3-300x250.jpg"
  },
  {
    account: "Christian Dior",
    photo: "http://jakirsuman.com/wp-content/uploads/2016/08/Dior_33light.jpg"
  },
  {
    account: "Dom Perignon",
    photo: "http://static.materialicious.com/images/dom-prignon-x-iris-van-herpen-metamorphosis-m.jpg"
  },
  {
    account: "Fresh",
    photo: "https://static1.squarespace.com/static/5805fc1920099efa03a1bc3a/580a345bcd0f684b8268e7fd/580a3ae19f7456e807206dea/1477071117167/15.jpg"
  },
  {
    account: "Fendi",
    photo: "http://data.whicdn.com/images/197090952/superthumb.jpg"
  },
  {
    account: "Glenmorangie",
    photo: "http://dev.whiskeycast.com.nmsrv.com/wp-content/uploads/2014/12/glenmo_300x250.jpg"
  },
  {
    account: "Louis Vuitton",
    photo: "http://www.royalluxus.com/wp-content/uploads/2013/11/LV_News_Header-300x250.jpg"
  },
  {
    account: "Moet and Chandon",
    photo: "http://data.whicdn.com/images/267046624/superthumb.jpg"
  },
  {
    account: "Make Up For Ever",
    photo: "./img/ads/MUFE-ad.jpg"
  },
  {
    account: "TAG Heuer",
    photo: "http://sgwatchmart.com.sg/sites/default/files/styles/side_ads/public/ads_images/ad1701-0029.png?itok=Zj9k3Jw-"
  },
  {
    account: "Hennessy",
    photo: "./img/ads/index.html"
  }

];


//DOT SLASH IMG for the paths in the ads foolder...or maybe ad te /ads to. MUFE ad: http://www.2beauty.com.br/blog/wp-content/uploads/2013/07/arteface-20130730_especial-mufe-300x250.jpg
//the above because you are referencing from the html and not the javascript file
//zip or unzip the html creative files?

var changeAd = function(campaigns) {
  $("h4").text(ad[campaigns]["account"]);
  $("#brand").attr("src", ad[campaigns]["photo"]);
}

$(".bel").on("click", function() {
  changeAd(0);
});

$(".bvl").on("click", function() {
  changeAd(1);
});

$(".dior").on("click", function() {
  changeAd(2);
});

$(".domp").on("click", function() {
  changeAd(3);
});

$(".fresh").on("click", function() {
  changeAd(4);
});

$(".fendi").on("click", function() {
  changeAd(5);
});
$(".glenmo").on("click", function() {
  changeAd(6);
});

$(".lv").on("click", function() {
  changeAd(7);
});

$(".mc").on("click", function() {
  changeAd(8);

});
$(".mufe").on("click", function() {
  changeAd(9);
});

$(".tag").on("click", function() {
  changeAd(10);
});

$(".henny").on("click", function() {
  changeAd(11);

});
