var hoeveelGetallen = parseInt(prompt("Hoeveel getallen wens je in te geven? "));
var reeks1 = [];
var reeks2 = [];
var som = 0;
var vermenigvuldiging = 0;
var teller = 0;



for(var i = 1;i<=hoeveelGetallen;i++){
	var getal =  parseInt(prompt("Geef getal" + i + "in: "));
	som = reeks1[teller] + reeks2[teller];
	vermenigvuldiging = reeks1[teller] * reeks2[teller];
	document.write(som);
	document.write(vermenigvuldiging);
	teller++;

}
function getal () {
	alert('De door u gekozen getallen zijn');
}
var resultaat =0;
var mijnbutton = document.getElementById('resultaat');
window.onload = function (){
	var resultaat = document.querySelector('#reeks3');
	var mijnbutton = document.querySelector('#btnStart1');
	mijnbutton.addEventListener('click',function () {
		resultaat++;
		resultaat.innerHTML = resultaat ;

	},false);
}

