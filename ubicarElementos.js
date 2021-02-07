var parrafo = document.createElement('p');

var textoNuenvo = document.createTextNode('Hola soy un texto nuevo ');

parrafo.appendChild(textoNuenvo);

parrafo.setAttribute('class', 'texto');

var contenedor = document.document.getElementsByClassName('contenedor')[0];

