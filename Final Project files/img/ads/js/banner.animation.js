'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/logo.png', 'images/cta.png', 'images/dustCloud.png', 'images/txt1.png', 'images/txt2.png', 'images/txt3.png', 'images/txt4.png', 'images/txtLegal.png', 'images/rabbit.png'

  //ref images
  //'images/ref.jpg'
  ];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {
  /*
  this.ref = this.smartObject({
    backgroundImage: 'images/ref.jpg',
    parent: this.banner
  });
  */
  this.dust = this.smartObject({
    backgroundImage: 'images/dustCloud.png',
    x: 170,
    y: -600,
    rotation: 0,
    scale: 1.3,
    autoAlpha: 0,
    parent: this.banner
  });

  this.dust2 = this.smartObject({
    backgroundImage: 'images/dustCloud.png',
    x: 175,
    y: -605,
    rotation: 0,
    scale: 1.6,
    autoAlpha: 0,
    parent: this.banner
  });
  this.dust3 = this.smartObject({
    backgroundImage: 'images/dustCloud.png',
    x: 170,
    y: 385,
    rotation: 0,
    scale: 1.2,
    autoAlpha: 0,
    parent: this.banner
  });
  this.dust4 = this.smartObject({
    backgroundImage: 'images/dustCloud.png',
    x: 175,
    y: 390,
    rotation: 0,
    scale: 1.2,
    autoAlpha: 0,
    parent: this.banner
  });

  this.rabbit = this.smartObject({
    backgroundImage: 'images/rabbit.png',
    x: 185,
    y: 150,
    scale: 1.2,
    rotation: 10,
    autoAlpha: 0,
    parent: this.banner
  });

  this.rabbit2 = this.smartObject({
    backgroundImage: 'images/rabbit.png',
    x: 170,
    y: 550,
    scale: 1.5,
    autoAlpha: 0,
    parent: this.banner
  });

  // text assets
  this.txt1 = this.smartObject({
    backgroundImage: 'images/txt1.png',
    autoAlpha: 0,
    parent: this.banner
  });
  this.txt2 = this.smartObject({
    backgroundImage: 'images/txt2.png',
    autoAlpha: 0,
    parent: this.banner
  });
  this.txt3 = this.smartObject({
    backgroundImage: 'images/txt3.png',
    autoAlpha: 0,
    parent: this.banner
  });
  this.txt4 = this.smartObject({
    backgroundImage: 'images/txt4.png',
    autoAlpha: 0,
    parent: this.banner
  });
  this.txtLegal = this.smartObject({
    backgroundImage: 'images/txtLegal.png',
    y: 0,
    autoAlpha: 0,
    parent: this.banner
  });

  this.logo = this.smartObject({
    backgroundImage: 'images/logo.png',
    autoAlpha: 0,
    width: 132,
    height: 24,
    parent: this.banner
  });
  this.cta = this.smartObject({
    backgroundImage: 'images/cta.png',
    autoAlpha: 0,
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.logo.center();
  this.txt1.center();
  this.txt2.center();
  this.txt3.center();
  this.txt4.center();
  this.txtLegal.center();
  this.cta.center();
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {
  var _this = this;

  function loop() {
    _this.timeline.gotoAndPlay('start');
  }

  this.timeline = new TimelineLite({/*onComplete: loop*/}).addLabel('start', .5).to(this.dust, 8, { autoAlpha: 1, x: -390, y: 380, rotation: -30, scale: 1.2, ease: Sine.easeOut }, "start").to(this.dust2, 8, { autoAlpha: 1, x: -395, y: 320, rotation: 45, scale: 1.5, ease: Sine.easeOut }, "-=7.85").to([this.dust, this.dust2], 3, { opacity: 0, ease: Sine.easeOut }, "-=4.5").to(this.rabbit, 6, { autoAlpha: 1, rotation: -10, scale: 1.4, x: -180, y: 110, ease: Sine.easeOut }, "-=7").to(this.txt1, 1, { autoAlpha: 1, ease: Sine.easeOut }, "-=6").to(this.txt1, 1, { autoAlpha: 0, ease: Sine.easeOut }, "-=2").to(this.txt2, 2, { autoAlpha: 1, ease: Sine.easeOut }).to(this.txt2, 1, { autoAlpha: 0, ease: Sine.easeOut }, "+=2").to(this.dust3, 8, { autoAlpha: 1, x: -490, y: 380, rotation: -30, scale: 1.3, ease: Sine.easeOut }, "-=3").to(this.dust4, 8, { autoAlpha: 1, x: -495, y: 320, rotation: 45, scale: 1.3, ease: Sine.easeOut }, "-=7.85").to(this.rabbit2, 5, { autoAlpha: 1, rotation: -15, x: -25, y: 450, scale: 1, ease: Sine.easeOut }, "-=7.5").to(this.txt3, 2, { autoAlpha: 1, ease: Sine.easeOut }, "-=5").to(this.txt3, 1, { autoAlpha: 0, ease: Sine.easeOut }, "-=3").to(this.txt4, 2, { autoAlpha: 1, ease: Sine.easeOut }, "-=2").to(this.txt4, 1, { autoAlpha: 0, ease: Sine.easeOut }).add("endFrame", -0.5).set(this.txtLegal, { y: 262 }).set(this.logo, { y: -86 }).set(this.cta, { y: -44 }).to([this.logo, this.cta, this.txtLegal], 1, { autoAlpha: 1, ease: Sine.easeOut });
};