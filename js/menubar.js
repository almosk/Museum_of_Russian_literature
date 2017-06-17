$(function() {
	$(document).on('scroll', function() {
    var el = document.getElementsByClassName('landingWrapper')[0]
		var elTop = el.getBoundingClientRect().top
    var documentHeight = document.documentElement.clientHeight
    if ((-elTop) > documentHeight) {
      $('.menubar').removeClass('firstpage')
    }

    if ((-elTop) < documentHeight) {
      $('.menubar').addClass('firstpage')
    }

    // console.log('Scroll', elTop, documentHeight)
	})
})
