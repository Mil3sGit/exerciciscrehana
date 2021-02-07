




// PROGRAMACION ORIENTADA A OBJETOS O POO


// Es una serie de normas de realizar las cosas
// de manera que otras personas puedan utilizarlas
// y adelantar su trabajo, de manera que consigamos
// que el código se pueda reutilizar.

// CLASES
//Son fuciones constructoras y se escriben uniciando con Mayúsculas.



// var texto = 'Hola soy un texto';

//Clases de JAVASCRIPT

// var texto = new String('Hola soy un texto');

// var numero = new Number(5);

// var boleano = new Boolean(true);


// //Clases de Javascript compuestas

// var arreglos = new Array('Alejandro', 'Maria', 'Pedro');

// var objeto = new Object({color: 'Verde', tamaño: 'Grande'});



//CLASES PERSONALIZADAS


// function Persona(){
// 	this.nombre;
// 	this.edad;

// }

// var persona1 = new Persona();
// persona1.nombre = 'Alejandro';
// persona1.edad = 18;

// var persona2 = new Persona();
// persona2.nombre = 'Miles';
// persona2.edad = 42;
// persona2.altura = 178;

// console.log(persona1);
// console.log(persona2);



//fet de la manera anterior


// function Persona(nombre, edad, altura){
// 	this.nombre = nombre;
// 	this.edad = edad;
// 	this.altura = altura;
// }

// var persona1 = new Persona ('Pedro', 17, 153);
// var persona2 = new Persona ('Estefania', 29, 174);
// console.log(persona2);
// console.log(persona1);

// function Planta(color, tamaño){
// 	this.color = color;
// 	this.tamaño = tamaño;
// }

// var planta1 = new Planta ('Azul', 'Mediano');

// console.log(planta1);


// OBJETOS

//Aqui tenemos un objeto llamado planta que tiene un color y un tamaño.

var planta = {
	color: 'verde',
	tamaño: 'Grande',
	//añadimos un método (un método es una función dentro de un objeto)
	escribeInformacion: function(precio){
			console.log('El color de la planta es ' + planta.color + ' y su tamaño es ' + planta.tamaño + ', y su precio es ' + precio);


	}
}

// console.log(planta.color);
// console.log(planta.tamaño);

planta.escribeInformacion('1500$');






