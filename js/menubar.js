$(function() {
	$(document).on('scroll', function() {
    var el = document.getElementsByClassName('landingWrapper')[0]
		var elTop = el.getBoundingClientRect().top
    var documentHeight = document.documentElement.clientHeight
    if ((-elTop) > documentHeight) {
      $('.menubar').removeClass('firstpage')
			$('.arrow').css({"background-image": "url(img/arrow_black.svg)"});
    }

    if ((-elTop) < documentHeight) {
      $('.menubar').addClass('firstpage')
			$('.arrow').css({"background-image": "url(img/arrow.svg)"});
    }

    // console.log('Scroll', elTop, documentHeight)
	})

	$('#ni1, #ni2').hover(function()
    {$('.museumsList').toggleClass('hidden')}
  )

	$('#ni3').hover(function()
		{$('.contentList').toggleClass('hidden')}
  )
})
