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
