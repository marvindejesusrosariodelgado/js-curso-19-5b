

const saludar = (nombre) => {

console.log('Creando etiquiqueta h1, en HTML');

// comentario de una sola sola linea.
// El codigp comentado no lo lee el interprete de JS.

/*
Comentario de varias lineas.
Uso baasico del DOCUMENT OBJECT MODEL (DOM)
permite a JS modificar el HTML.
*/
const h1 = document.createElement('h1');
h1.innerText = 'hola, ${nombre}';

document.body.append(h1);

}
const user= "Juancho"

saludar(user);




