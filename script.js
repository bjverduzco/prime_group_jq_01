var apples = [];
var oranges = [];
var bananas = [];
var grapes = [];
var money = 10000;
var applesPrice = 500;
var orangesPrice = 500;
var bananasPrice = 500;
var grapesPrice = 500;
var intervalId;
var clearIntId;

function priceToString(price) {
	var tempPrice = price/100;
	return tempPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

function startingPrices(){
		applesPrice = randomNumber(50, 999);
		orangesPrice = randomNumber(50, 999);
		bananasPrice = randomNumber(50, 999);
		grapesPrice = randomNumber(50, 999);
}

function getPrice(){
	var min = 0;
	var max = 100;
	applesPrice += randomNumber(min, max);
	orangesPrice += randomNumber(min, max);
	bananasPrice += randomNumber(min, max);
	grapesPrice += randomNumber(min, max);

	if (applesPrice < 50) {
		applesPrice += 50;
	}
	if (applesPrice > 999) {
		applesPrice -= 50;
	}
	if (orangesPrice < 50) {
		orangesPrice += 50;
	}
	if (orangesPrice > 999) {
		orangesPrice -= 50;
	}
	if (bananasPrice < 50) {
		bananasPrice += 50;
	}
	if (bananasPrice > 999) {
		bananasPrice -= 50;
	}
	if (grapesPrice < 50) {
		grapesPrice += 50;
	}
	if (grapesPrice > 999) {
		grapesPrice -= 50;
	}

	$('.apple-price').html(priceToString(applesPrice));
	$('.orange-price').html(priceToString(orangesPrice));
	$('.banana-price').html(priceToString(bananasPrice));
	$('.grape-price').html(priceToString(grapesPrice));
}


function randomNumber(min, max) {
	var number = Math.floor(Math.random() * (1 + max - min) + min);
	return (number - 50);
}


function clear(){
		clearInterval(intervalId);
}

startingPrices();
intervalId = setInterval(getPrice, 1500);
clearIntId = setInterval(clear, 600000);

//jQuery functions
$(function() {
	var numApple = 0;
	var numOrange = 0;
	var numBanana = 0;
	var numGrape = 0;
	var bankAmount = 10000;
	getPrice();



	function getAverage(array) {
		var tempSum = 0;
		for (var i = 0; i < array.length; i++) {
			tempSum += array[i];
		}
		return priceToString(tempSum/array.length);
	}

	$('.list-of-fruit').on('click','.fruit', function() {
		var tempFruit = $(this).children().attr('class');



		switch(tempFruit) {
			case 'apple':
				numApple++;
				if (bankAmount < applesPrice) {
					alert('INSUFFIENT FUNDS, BUY MORE PYLONS!');
					break;
				}
				bankAmount -= applesPrice;
				$('.number-apples').html(numApple);

				apples.push(applesPrice);
				$('.apple-average').html(getAverage(apples));

				break;
		  case 'orange':
				numOrange++;
				if (bankAmount < orangesPrice) {
					alert('INSUFFIENT FUNDS, BUY MORE PYLONS!');
					break;
				}
				bankAmount -= orangesPrice;
				$('.number-oranges').html(numOrange);
				oranges.push(orangesPrice);
				$('.orange-average').html(getAverage(oranges));
				break;
			case 'banana':
				numBanana++;
				if (bankAmount < bananasPrice) {
					alert('INSUFFIENT FUNDS, BUY MORE PYLONS!');
					break;
				}
				bankAmount -= bananasPrice;
				$('.number-bananas').html(numBanana);
				bananas.push(bananasPrice);
				$('.banana-average').html(getAverage(bananas));
				break;
			case 'grape':
				numGrape++;
				if (bankAmount < grapesPrice) {
					alert('INSUFFIENT FUNDS, BUY MORE PYLONS!');
					break;
				}
				bankAmount -= grapesPrice;
				$('.number-grapes').html(numGrape);
				grapes.push(grapesPrice);
				$('.grape-average').html(getAverage(grapes));
				break;
		}



		$('.cash-money').html(priceToString(bankAmount));

	});

	$('.sell-fruit').on('click','div', function() {
		var tempSellFruit = $(this).attr('class');
		switch(tempSellFruit) {
			case 'sell-apple':
				if (numApple > 0) {
					numApple--;
					bankAmount += applesPrice;
					$('.number-apples').html(numApple);
					break;
				}
				else {
					alert('NOT ENOUGH FRUIT!');
					break;
				}
			case 'sell-orange':
				if (numOrange > 0) {
					numOrange--;
					bankAmount += orangesPrice;
					$('.number-oranges').html(numOrange);
					break;
				}
				else {
					alert('NOT ENOUGH FRUIT!');
					break;
				}
			case 'sell-banana':
				if (numBanana > 0) {
					numBanana--;
					bankAmount += bananasPrice;
					$('.number-bananas').html(numBanana);
					break;
				}
				else {
					alert('NOT ENOUGH FRUIT!');
					break;
				}
			case 'sell-grape':
				if (numGrape > 0) {
					numGrape--;
					bankAmount += grapesPrice;
					$('.number-grapes').html(numGrape);
					break;
				}
				else {
					alert('NOT ENOUGH FRUIT!');
					break;
				}
		}

		$('.cash-money').html(priceToString(bankAmount));
	});


});
