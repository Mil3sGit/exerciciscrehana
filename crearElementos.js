// Crear nuevo elemento o nodo


/* crear un parrafo
<p></p>
'Hola soy un nuevo texto'

<p class="texto">'Hola soy un  nuevo texto'</p>
*/


// creamos un nuevo parrafo
var parrafoNuevo = document.createElement('p');


//creamos un nuevo texto para el parrafo

var textoNuevo = document.createTextNode('Hola soy un nuevo texto');


// Agregar el texto nuevo en el parrafo


parrafoNuevo.appendChild(textoNuevo);


// Agregar un nuevo atributo de clase


parrafoNuevo.setAttribute('class', 'texto');

//seleccionar contenedor

var contenedor = document.getElementsByClassName('contenedor')[0];


//agregar el nuevo parrafo dentro de contenedor

contenedor.appendChild(parrafoNuevo);