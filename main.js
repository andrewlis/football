'use strict'

let i = 0;
let j = 0;

$('.score').text(i + ' : ' + j)

$('.ball').on('click',  () => {
	$('.score').text(i + ' : ' + j);
	const width = $('.field').width() - $('.ball').width();
	const height = $('.field').height() - $('.ball').height();
	const random = Math.floor(Math.random() * (height - 0 + 1)) + 0;
	const goalPosition = (random * 100) / height;
	if ($('.ball').css('left') == 0 + 'px'){
		$('.ball').animate({
			top: random,
			left: width
		}, 2000, 'swing', () => {
			if (goalPosition >=  42.6 && goalPosition <= 57.4){
				i++;
				alert('Гол!');
			}
		});
	} else {
		$('.ball').animate({
			top: random,
			left: 0
		}, 2000, 'swing', () => {
			if (goalPosition >=  42.6 && goalPosition <= 57.4){
				j++;
				alert('Гол!');
			}
		});
	}	
});