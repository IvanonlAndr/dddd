$(document).ready(function () {
	var modal = document.getElementById("win_modal2");
	var span = document.getElementsByClassName("close")[0];

	$('#open-window').on('click', function () {
		modal.style.display = "block";
	});

	span.onclick = function () {
		modal.style.display = "none";
	}

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
});
$(document).ready(function ($) {
	$('.popup-open').click(function () {
		$('.popup-fade').fadeIn();
		return false;
	});

	$('.popup-close').click(function () {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});

	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});

	$('.popup-fade').click(function (e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();
		}
	});
});
$(document).ready(function ($) {
	$('.popup-open2').click(function () {
		$('.popup-fade2').fadeIn();
		return false;
	});

	$('.popup-close2').click(function () {
		$(this).parents('.popup-fade2').fadeOut();
		return false;
	});

	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade2').fadeOut();
		}
	});

	$('.popup-fade2').click(function (e) {
		if ($(e.target).closest('.popup2').length == 0) {
			$(this).fadeOut();
		}
	});
});
$(document).ready(function ($) {
	$('.popup-open3').click(function () {
		$('.popup-fade3').fadeIn();
		return false;
	});

	$('.popup-close3').click(function () {
		$(this).parents('.popup-fade3').fadeOut();
		return false;
	});

	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade3').fadeOut();
		}
	});

	$('.popup-fade3').click(function (e) {
		if ($(e.target).closest('.popup3').length == 0) {
			$(this).fadeOut();
		}
	});
});
$('#js_td-text_2').hover(
	function () {
		$('info_inner').css('background', 'black')
	},
	function () {
		$('info_inner').css('background', 'transparent')
	}
)
$('#js_td-text_2').hover(
	function () {
		$('#js_td-text_3').css('background', 'white')
	},
	function () {
		$('#js_td-text_3').css('background', 'transparent')
	}
)
$('#js_td-text_2').hover(
	function () {
		$('#js_td-text_4').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_4').css('background', 'transparent')
	}
)
$('#js_td-text_2').hover(
	function () {
		$('#js_td-text_5').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_5').css('background', 'transparent')
	}
)
$('#js_td-text_2').hover(
	function () {
		$('#js_td-text_4').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_4').css('background', 'transparent')
	}
)
$('#js_td-text_2').hover(
	function () {
		$('#js_td-text_5').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_5').css('background', 'transparent')
	}
)
$('#js_td-text_2').hover(
	function () {
		$('#js_td-text_6').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_6').css('background', 'transparent')
	}
)
$('#js_td-text_2').hover(
	function () {
		$('#js_td-text_7').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_7').css('background', 'transparent')
	}
)
$('#js_td-text_2').hover(
	function () {
		$('#js_td-text_8').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_8').css('background', 'transparent')
	}
)
$('#js_td-text_2').hover(
	function () {
		$('#js_td-text_9').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_9').css('background', 'transparent')
	}
)
$('#js_td-text_2').hover(
	function () {
		$('#js_td-text_10').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_10').css('background', 'transparent')
	}
)
$('#js_td-text_2').hover(
	function () {
		$('#js_td-text_11').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_11').css('background', 'transparent')
	}
)
$('#js_td-text_4').hover(
	function () {
		$('#js_td-text_2').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_2').css('background', 'transparent')
	}
)
$('#js_td-text_4').hover(
	function () {
		$('#js_td-text_3').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_3').css('background', 'transparent')
	}
)
$('#js_td-text_4').hover(
	function () {
		$('#js_td-text_4').css('background', 'white')
	},
	function () {
		$('#js_td-text_4').css('background', 'transparent')
	}
)
$('#js_td-text_4').hover(
	function () {
		$('#js_td-text_5').css('background', 'white')
	},
	function () {
		$('#js_td-text_5').css('background', 'transparent')
	}
)
$('#js_td-text_4').hover(
	function () {
		$('#js_td-text_6').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_6').css('background', 'transparent')
	}
)
$('#js_td-text_4').hover(
	function () {
		$('#js_td-text_7').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_7').css('background', 'transparent')
	}
)
$('#js_td-text_4').hover(
	function () {
		$('#js_td-text_8').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_8').css('background', 'transparent')
	}
)
$('#js_td-text_4').hover(
	function () {
		$('#js_td-text_9').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_9').css('background', 'transparent')
	}
)
$('#js_td-text_4').hover(
	function () {
		$('#js_td-text_10').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_10').css('background', 'transparent')
	}
)
$('#js_td-text_4').hover(
	function () {
		$('#js_td-text_11').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_11').css('background', 'transparent')
	}
)
$('#js_td-text_6').hover(
	function () {
		$('#js_td-text_2').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_2').css('background', 'transparent')
	}
)
$('#js_td-text_6').hover(
	function () {
		$('#js_td-text_3').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_3').css('background', 'transparent')
	}
)
$('#js_td-text_6').hover(
	function () {
		$('#js_td-text_4').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_4').css('background', 'transparent')
	}
)
$('#js_td-text_6').hover(
	function () {
		$('#js_td-text_5').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_5').css('background', 'transparent')
	}
)
$('#js_td-text_6').hover(
	function () {
		$('#js_td-text_8').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_8').css('background', 'transparent')
	}
)
$('#js_td-text_6').hover(
	function () {
		$('#js_td-text_9').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_9').css('background', 'transparent')
	}
)
$('#js_td-text_6').hover(
	function () {
		$('#js_td-text_10').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_10').css('background', 'transparent')
	}
)
$('#js_td-text_6').hover(
	function () {
		$('#js_td-text_11').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_11').css('background', 'transparent')
	}
)
$('#js_td-text_8').hover(
	function () {
		$('#js_td-text_2').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_2').css('background', 'transparent')
	}
)
$('#js_td-text_8').hover(
	function () {
		$('#js_td-text_3').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_3').css('background', 'transparent')
	}
)
$('#js_td-text_8').hover(
	function () {
		$('#js_td-text_4').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_4').css('background', 'transparent')
	}
)
$('#js_td-text_8').hover(
	function () {
		$('#js_td-text_5').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_5').css('background', 'transparent')
	}
)
$('#js_td-text_8').hover(
	function () {
		$('#js_td-text_6').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_6').css('background', 'transparent')
	}
)
$('#js_td-text_8').hover(
	function () {
		$('#js_td-text_7').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_7').css('background', 'transparent')
	}
)
$('#js_td-text_8').hover(
	function () {
		$('#js_td-text_10').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_10').css('background', 'transparent')
	}
)
$('#js_td-text_8').hover(
	function () {
		$('#js_td-text_11').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_11').css('background', 'transparent')
	}
)
$('#js_td-text_10').hover(
	function () {
		$('#js_td-text_2').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_2').css('background', 'transparent')
	}
)
$('#js_td-text_10').hover(
	function () {
		$('#js_td-text_3').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_3').css('background', 'transparent')
	}
)
$('#js_td-text_10').hover(
	function () {
		$('#js_td-text_4').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_4').css('background', 'transparent')
	}
)
$('#js_td-text_10').hover(
	function () {
		$('#js_td-text_5').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_5').css('background', 'transparent')
	}
)
$('#js_td-text_10').hover(
	function () {
		$('#js_td-text_6').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_6').css('background', 'transparent')
	}
)
$('#js_td-text_10').hover(
	function () {
		$('#js_td-text_7').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_7').css('background', 'transparent')
	}
)
$('#js_td-text_10').hover(
	function () {
		$('#js_td-text_8').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_8').css('background', 'transparent')
	}
)
$('#js_td-text_10').hover(
	function () {
		$('#js_td-text_9').css('background', '#00000080')
	},
	function () {
		$('#js_td-text_9').css('background', 'transparent')
	}
)
// $(document).ready(function ($) {
// 	$('.info-2').click(function () {
// 		$('.popup-fade4').fadeIn();
// 		return false;
// 	});

// 	$('.popup-close4').click(function () {
// 		$(this).parents('.popup-fade4').fadeOut();
// 		return false;
// 	});

// 	$(document).keydown(function (e) {
// 		if (e.keyCode === 27) {
// 			e.stopPropagation();
// 			$('.popup-fade4').fadeOut();
// 		}
// 	});

// 	$('.popup-fade4').click(function (e) {
// 		if ($(e.target).closest('.popup4').length == 0) {
// 			$(this).fadeOut();
// 		}
// 	});
// });
$(function(){
    $('.slider__inner').slick({
    //   setting-name: setting-value
        arrows: false,
        dots: true 
    });
  });