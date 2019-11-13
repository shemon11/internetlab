$(window).scroll(function() {
  /* affix after scrolling 10px */
  if ($(document).scrollTop() > 10) {
    $('.navbar').addClass('affix');
  } else {
    $('.navbar').removeClass('affix');
  }
});