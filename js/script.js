function somaTudo(){

var valorUm = parseInt(document.getElementById("campoUm").value);
var valorDois = parseInt(document.getElementById("campoDois").value);


if(isNaN(valorUm))
valorUm = 0

if(isNaN(valorDois))
valorDois = 0

var Parada = ((valorUm / 220 * 7.5) * (valorDois / 10));

document.getElementById("TotalThree").innerHTML = (Parada).toFixed(2);}
