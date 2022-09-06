var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button=document.querySelector('button')

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + "";
}
function radomcolor(){

	 var randomColor = Math.floor(Math.random()*16777215).toString(16);
	 // document.body.style.backgroundColor = "#" + randomColor;
	 color1.value= "#" + randomColor
	 var randomColor = Math.floor(Math.random()*16777215).toString(16);
	 color2.value="#" + randomColor
	 // color.innerHTML = "#" + randomColor;

}
css.textContent = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
button.addEventListener('click',radomcolor)
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
