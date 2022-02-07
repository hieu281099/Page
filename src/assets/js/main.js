$(window).scroll(function(){
  if($(window).scrollTop()){
    $('.header-bottom').addClass('sticky');
  } else
  {
    $('.header-bottom').removeClass('sticky')
  }
})

$('.fa-search').click(function(){
  $('.search-form').toggleClass('active')
})

$('.fa-bars').click(function(){
  $('.header-bottom__menu__list').toggleClass('active')
  $('#nav').toggleClass('col-12')
})

// product slide
$('.product-feature__slide').carousel({
  interval: false,
  pause: true
})

$('.control').click(function () {
  $('.control').blur();
})

//blog slide
$('.blog__slide').carousel({
  interval: false,
  pause: true
})

// button to top
$(window).ready(function () {
  if($('.button-to-top').length > 0) {
    $(window).scroll(function () {
      if($(window).scrollTop() > 300)
        $('.button-to-top').show()
      else
        $('.button-to-top').hide()
    })
    $('.button-to-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1000)
    })
  }
})