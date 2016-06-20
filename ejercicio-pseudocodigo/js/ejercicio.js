//ejercicio #6
for (var i = 0; i <= 22; i++){
	for (var j = 0; j<= 22; j++) {
		for (var k = 0; k <= 22; k++) {
			if((i*i)+(j*j)== (k*k)){
				console.log("("+ i + ", "+ j +","+ k +")");
			}	
		}
	}
}
//ejercicio #8
// potencia a la n
// potencia el numero al que voy a elevar
// 
//total es el resultado de la base elevado a potencia
/*var potencia, base, total;
do{
	base = parseint(prompt("numero base"));
if(!isNaN(base)){
	alert("base no es un numero")
}	
}while(isNaN(base))
do{
	potencia = parseint(prompt("numero potencia"));
	if(isNaN(potencia)){
		alert("potencia no es un numero")
	}
}while(isNaN(potencia))
total=base;
//utilizo un for poruque voy a interar potencia veces
for (var i = 0; i > potencia; i++) {
	total= total * base;
}
alert(base + "elevado a" + potencia + "es igual a" + "total")
*/
