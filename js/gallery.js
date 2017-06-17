$(function() {
  var counter = 0;

  $('.scrollPlus').click(function() {
    if (counter < 7) {
      $('.gallery').css({"margin-left": "-=100vw"});
      $('.scrollMinus').removeClass('hidden');
      if (counter == 4) {
        $('.scrollPlus').addClass('hidden');
      }
      counter += 1;
    }
  });

  $('.scrollMinus').click(function() {
    if (counter > 0) {
      $('.gallery').css({"margin-left": "+=100vw"});
      $('.scrollPlus').removeClass('hidden');
      if (counter == 1) {
        $('.scrollMinus').addClass('hidden');
      }
      counter -= 1;
    }
  });

  $('.scrollMinus, .scrollPlus').hover(function()
    {$('.logo, .menubar, .logoLine, .overlay').toggleClass('hidden')}
  )
});
