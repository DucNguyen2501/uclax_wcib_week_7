jQuery(function() {

	let my_switch = false;
	$('#my_button').click(function () {

		if (my_switch == false) {my_switch = true;
				$(this).html('Click for girl');
				$('p').html('Congratulations on your baby boy!');
				$('#my_image').attr('src','../images/Baby-boy.png');
		} else {
			my_switch = false;
			$(this).html('Click for boy');
			$('p').html('Congratulations on your baby girl!');
			$('#my_image').attr('src','../images/Baby-girl.png');
		}
	});
});

jQuery(function() {

	let change_bg = false;
	$('#edit-bg').click(function () {

		if (change_bg == false) {change_bg = true;
				$('#my_bg').attr('src','../images/bg-toy.jpg');
		} else {
			change_bg = false;
			$('#my_bg').attr('src','../images/bg-bird.jpg');
		}
	});
});

// jQuery(function() {
// 	$('#edit_background').click(function () {
//
// 		if  ( $('.board').hasClass('blue'))
//
// 		{ $('.board').removeClass('blue');
// 	} else {
// 		$('.board').addClass('blue');}
//
// 	});
// });
