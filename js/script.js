function one(n){
	document.getElementById("resultado").value = document.getElementById("resultado").value + 1;
}

function two(n){
	document.getElementById("resultado").value = document.getElementById("resultado").value + 2;
}

function three(n){
	document.getElementById("resultado").value = document.getElementById("resultado").value + 3;
}

function four(n){
	document.getElementById("resultado").value = document.getElementById("resultado").value + 4;
}

function five(n){
	document.getElementById("resultado").value = document.getElementById("resultado").value + 5;
}

function six(n){
	document.getElementById("resultado").value = document.getElementById("resultado").value + 6;
}

function seven(n){
	document.getElementById("resultado").value = document.getElementById("resultado").value + 7;
}

function eight(n){
	document.getElementById("resultado").value = document.getElementById("resultado").value + 8;
}

function nine(n){
	document.getElementById("resultado").value = document.getElementById("resultado").value + 9;
}

function zero(n){
	document.getElementById("resultado").value = document.getElementById("resultado").value + 0;
}

function cls() {
	document.getElementById("resultado").value = "";
}

function igual() {
}

var div;
var mult;
var adic;
var sub;
var op;

function soma() {
	if (op == 5) {
		adic = result;
	}
	adic = document.getElementById("resultado").value;
	document.getElementById("resultado").value = null;
	op = 1;

}

function subtracao() {
	if (op == 5) {
		sub = result;
	}
	sub = document.getElementById("resultado").value;
	document.getElementById("resultado").value = null;
	op = 2;
}

function divisao() {
	if (op == 5) {
		div = result;
	}	
	div = document.getElementById("resultado").value;
	document.getElementById("resultado").value = null;
	op = 3;
}

function multiplicacao() {
	if (op == 5) {
		mult = result;
	}
	mult = document.getElementById("resultado").value;
	document.getElementById("resultado").value = null;
	op = 4;
}

var f;
var result;

function igual() {
	f = document.getElementById("resultado").value;
	if (op == 1) {
		document.getElementById("resultado").value = parseFloat(adic) + parseFloat(f);
		result = document.getElementById("resultado").value;
	}

	if (op == 2) {
		document.getElementById("resultado").value = parseFloat(sub) - parseFloat(f);
		result = document.getElementById("resultado").value;
	}	

	if (op == 3) {
		document.getElementById("resultado").value = parseFloat(div) / parseFloat(f);
		result = document.getElementById("resultado").value;
	}

	if (op == 4) {
		document.getElementById("resultado").value = parseFloat(mult) * parseFloat(f);
		result = document.getElementById("resultado").value;
	}	

	op = 5;
}	


