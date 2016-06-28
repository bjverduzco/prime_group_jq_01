function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

$(function() {
	var numApple = 0;
	var numOrange = 0;
	var numBanana = 0;
	var numGrape = 0;
	var bankAmount = 100;

	$('.list-of-fruit').on('click','.fruit', function() {
		var tempFruit = $(this).children().attr('class');

		switch(tempFruit) {
			case 'apple':
				numApple++;
				$('.number-apples').html(numApple);
				break;
		  case 'orange':
				numOrange++;
				$('.number-oranges').html(numOrange);
				break;
			case 'banana':
				numBanana++;
				$('.number-bananas').html(numBanana);
				break;
			case 'grape':
				numGrape++;
				$('.number-grapes').html(numGrape);
				break;
		}
		// function to remove market cost of whatever fruit from bank amount
		$('.cash-money').html(bankAmount);


	});










});
