$(function() {
	$(document).on('scroll', function() {
    var el = document.getElementsByClassName('landingWrapper')[0]
		var elTop = el.getBoundingClientRect().top
    var documentHeight = document.documentElement.clientHeight
    if ((-elTop) > documentHeight) {
      $('.menubar').removeClass('firstpage')
			$('.arrow').css({"background-image": "url(img/arrow_black.svg)"});
			$('#hamb').css({"background-image": "url(img/hamburger_black.svg)"});
    }

    if ((-elTop) < documentHeight) {
      $('.menubar').addClass('firstpage')
			$('.arrow').css({"background-image": "url(img/arrow.svg)"});
			$('#hamb').css({"background-image": "url(img/hamburger.svg)"});
    }

    // console.log('Scroll', elTop, documentHeight)
	})

	$('#ni1, #ni2').hover(function()
    {$('.museumsList').toggleClass('hidden')}
  )

	// $('#ni3').hover(function()
	// 	{$('.contentList').toggleClass('hidden')}
  // )

	$('.contentListItem').each(function() {
		$(this).on('click', function(e) {
			e.preventDefault();
			var scrollTo = $(this).attr('href');
			var whitespace = scrollTo == '#s1' ? 70 : 30
			$('html,body').animate({
				scrollTop: $(scrollTo).offset().top - whitespace - 20
			}, 500);
		});
	});

	function changename() {
		var el = document.getElementsByClassName('landingWrapper')[0]
		var elTop = -(el.getBoundingClientRect().top)
		var docHeight = document.documentElement.clientHeight
		var ni3 = document.getElementById("ni3")

		console.log(elTop, docHeight, (docHeight - elTop))

		if ((elTop) > (docHeight - 50))   {ni3name.innerHTML = "Информация"}
		if ((elTop) > (docHeight + 60))   {ni3name.innerHTML = "О музее"}
		if ((elTop) > (docHeight + 505))  {ni3name.innerHTML = "Экскурсии"}
		if ((elTop) > (docHeight + 1395)) {ni3name.innerHTML = "Здание и экспозиция"}
		if ((elTop) > (docHeight + 2076)) {ni3name.innerHTML = "У нас работают"}
		if ((elTop) > (docHeight + 2570)) {ni3name.innerHTML = "Выдающиеся сотрудники разных лет"}
		if ((elTop) < (docHeight - 50))   {ni3name.innerHTML = "Галерея"}
	}

	$(document).on('scroll', function() {
		changename()
	})
})
