$(document).ready(function(){
  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle');
  });
  $(window).on('scroll load',function(){
    $('.fa-bars').removeClass('fa-times');
    $('nav').removeClass('nav-toggle');
  });
  $('.count').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 5000,
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum + '+');
      }
    });
  });
  $('.project').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
    enabled:true
    }
  });
});
var options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15
  }
};
var carousel = document.querySelector('[data-carousel]');
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);
flkty.on('scroll', function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = (slide.target + flkty.x) * -1/3;
    image.style.backgroundPosition = x + 'px';
  });
});