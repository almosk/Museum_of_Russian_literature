$(function() {
  $('#mi1').hover(function()
    {$('#bi1, #mi2, #mi3, #mi4, #mi5, #mi6, #mi7, #mi8, #mi9, #mi10, #mi11, #mi12 ').toggleClass('hidden')}
  )

  $('#mi2').hover(function()
    {$('#bi2, #mi1, #mi3, #mi4, #mi5, #mi6, #mi7, #mi8, #mi9, #mi10, #mi11, #mi12 ').toggleClass('hidden')}
  )

  $('#mi3').hover(function()
    {$('#bi3, #mi1, #mi2, #mi4, #mi5, #mi6, #mi7, #mi8, #mi9, #mi10, #mi11, #mi12 ').toggleClass('hidden')}
  )

  $('#mi4').hover(function()
    {$('#bi4, #mi1, #mi2, #mi3, #mi5, #mi6, #mi7, #mi8, #mi9, #mi10, #mi11, #mi12').toggleClass('hidden')}
  )

  $('#mi5').hover(function()
    {$('#bi5, #mi1, #mi2, #mi3, #mi4, #mi6, #mi7, #mi8, #mi9, #mi10, #mi11, #mi12').toggleClass('hidden')}
  )

  $('#mi6').hover(function()
    {$('#bi6, #mi1, #mi2, #mi3, #mi4, #mi5, #mi7, #mi8, #mi9, #mi10, #mi11, #mi12').toggleClass('hidden')}
  )

  $('#mi7').hover(function()
    {$('#bi7, #mi1, #mi2, #mi3, #mi4, #mi5, #mi6, #mi8, #mi9, #mi10, #mi11, #mi12').toggleClass('hidden')}
  )

  $('#mi8').hover(function()
    {$('#bi8, #mi1, #mi2, #mi3, #mi4, #mi5, #mi6, #mi7, #mi9, #mi10, #mi11, #mi12').toggleClass('hidden')}
  )

  $('#mi9').hover(function()
    {$('#bi9, #mi1, #mi2, #mi3, #mi4, #mi5, #mi6, #mi7, #mi8, #mi10, #mi11, #mi12').toggleClass('hidden')}
  )

  $('#mi10').hover(function()
    {$('#bi10, #mi1, #mi2, #mi3, #mi4, #mi5, #mi6, #mi7, #mi8, #mi9, #mi11, #mi12').toggleClass('hidden')}
  )

  $('#mi11').hover(function()
    {$('#bi11, #mi1, #mi2, #mi3, #mi4, #mi5, #mi6, #mi7, #mi8, #mi9, #mi10, #mi12').toggleClass('hidden')}
  )

  $('#mi12').hover(function()
    {$('#bi12, #mi1, #mi2, #mi3, #mi4, #mi5, #mi6, #mi7, #mi8, #mi9, #mi10, #mi11').toggleClass('hidden')}
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
