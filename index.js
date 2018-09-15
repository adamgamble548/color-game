var numsquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colordisplay = document.querySelector("#colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");

init();

function init(){
	//mode button even listeners
	for(var i = 0; i < modebuttons.length; i++) {
	modebuttons[i].addEventListener("click", function(){
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numsquares = 3;
		} else {
			numsquares = 6;
		}
		reset();
	});
	}

}

for(var i = 0; i < squares.length; i++) {
	//add initial colors to sqaures
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to sqares
	squares[i].addEventListener("click", function(){
		
		//Grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		
		//compare color to pickedColor variable
		if(clickedColor === pickedColor){
			messagedisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor
			resetbutton.textContent = "Play Again?"
		} else{
			this.style.backgroundColor = "#232323";
			messagedisplay.textContent = "Try Again";
		}
	});

	reset()
}



function reset() {
	colors = generateRandomColors(numsquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colordisplay to match picked Color
	colordisplay.textContent = pickedColor
	resetbutton.textContent = "New Colors"
	messagedisplay.textContent = ""
	//change the colors of the squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}



resetbutton.addEventListener("click", function(){
	reset();
})

colordisplay.textContent = pickedColor;





function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
	//change each color to match given color
	squares[i].style.backgroundColor = color;
	}

}

function pickColor() {
	//Math.random() picks a random color between 0 -1.
	//Math.random() * (any number) + 1 will choose a random number between 0 and your chosen number
	//Math.floor(Math.random * 6 + 1) will then remove the decimal 
	var random = Math.floor(Math.random() * colors.length) 
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
	//get random color and push into array
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b+ ")";
}