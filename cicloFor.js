

/*
// ciclo es una acción que se ejecuta todo de golpe


// for(variable de inicio; longitud o condicion que se debe cumplir para que se ejecute; incremento){

Código que queremos repetir

}

*/

/*

Enlloc de repetir un comando X vegades perquè ho fes utilitzarem for
console.log('1');
console.log('2');
console.log('3');

*/


// for(var i = 1; i <= 101; ++i){

// 	console.log(i);

// }

// o un altre exemple

// for(var i = 100; i > 0; i--) {
// 	console.log(i);
// }




// var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'aba cadabra']

// for (var i = 0; i < semana.length; i++) {
// 	console.log(semana[i]);
// 	// o per exemple           document.write(semana[i], ' -> ');
// }




// for in


var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'aba cadabra']

for(dia in semana){

	console.log(semana[dia]);
	document.write('-', ' ', semana[dia], ' ');


}









