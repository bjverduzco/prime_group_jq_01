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
	console.log("apples: " + (applesPrice/100));
	orangesPrice += randomNumber(min, max);
	console.log("oranges: " + (orangesPrice/100));
	bananasPrice += randomNumber(min, max);
	grapesPrice += randomNumber(min, max);
	console.log("bananas: " + (bananasPrice/100));
	console.log("grapes: " + (grapesPrice/100));
}


function randomNumber(min, max) {
	var number = Math.floor(Math.random() * (1 + max - min) + min);
	return (number - 50);
}


function clear(){
		clearInterval(intervalId);
}

startingPrices();
intervalId = setInterval(getPrice, 15000);
clearIntId = setInterval(clear, 60000);


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

		$('.cash-money').html(bankAmount);

	});

});
