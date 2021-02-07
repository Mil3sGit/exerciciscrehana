//CONTINUE  perOermite saltar a la siguiente ejecución del ciclo






var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];


for(var i = 0; i < semana.length; i++){

	if (semana[i] == 'Jueves') {
		continue;
	}

	console.log(semana[i]);

}


//exemple meu

var superherois = ['Superman', ' ', 'Batman',' ', 'Green Lantern',' ', 'Wonder Woman',' ', 'Shazam',' ', 'Mr. Miracle',' ', 'Batwoman',' ', 'Joker'];


for(var i = 0; i < superherois.length; i++) {
	if (superherois[i] == 'Joker')
		{continue;}

	document.write(superherois[i]);
}