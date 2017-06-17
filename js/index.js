$(function() {
  $('#mi9').hover(function()
    {$('#bi9, #mi1, #mi2, #mi3, #mi4, #mi5, #mi6, #mi7, #mi8, #mi10, #mi11, #mi12 ').toggleClass('hidden')}
  )

  $(window).resize(function() {
    var documentWidth = document.documentElement.clientWidth
    var transform = ((documentWidth / 1440)-0)

    document.querySelector('section.museums').style.transform = 'scale(' + transform + ')';
    // console.log(transform)
  })

  var documentWidth = document.documentElement.clientWidth
  var transform = ((documentWidth / 1440)-0)

  document.querySelector('section.museums').style.transform = 'scale(' + transform + ')';
});
