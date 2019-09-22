
$(function () {
	$('#FansPrice, #HoursPerDay').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});
	$('header .bars').on('click', function () {
		$('header ul.nav').slideToggle('300');
	});
	$(window).on('resize', function () {
		if ($(window).width() > 767) {
			$('header ul.nav').show();
		} else {
			$('header ul.nav').hide();
		}
	})
});



function scroll(a,b) {
	var home = b;
	var offsets = [];
	var elm = $('.fixed-scroll');
	var viewHeight = $(window).height();
	elm.each(function (i, data) {
		var height = $(data).outerHeight();
		$(data).next().css('margin-top', height);
		offsets.push({offset:$(data).next().offset().top, height: height});
		$(data).nextUntil('footer').css({'position':'relative', 'z-index':i+1})
		$(data).css({'position':'', 'z-index':i-1});
		if (i>0) {
			$(data).css('z-index','-100');
		}
	});
	$(window).on('scroll', function () {
        if ($(window).scrollTop() > 360) {
            $('header').addClass('scroll');
        }
        else {
            $('header').removeClass('scroll');
        }
        if ($(window).scrollTop() > offsets[0].offset) {
        	$($(elm)[0]).css('position','relative')
        	$($(elm)[0]).next().css({'position':'relative', 'margin-top':''});
        	$($(elm)[1]).css('z-index','0')
        } else {
			$($(elm)[0]).css('position','')
        	$($(elm)[0]).next().css({'position':'relative', 'margin-top': offsets[0].height});
        	$($(elm)[1]).css('z-index','-100')
        }
        if (home == 1) {
	        if (($(window).scrollTop() + viewHeight + $(elm).height()) >= offsets[1].offset) {
	        	$($(elm)[1]).css({'position':'relative', 'z-index':1});
	        	$($(elm)[1]).next().css({'position':'relative', 'margin-top':''});
	        }
	        else {
	        	$($(elm)[1]).css({'position':'', 'z-index':'-100'});
	        	$($(elm)[1]).next().css({'position':'relative', 'margin-top': offsets[1].height});
	        }
        }
    }).scroll();
}