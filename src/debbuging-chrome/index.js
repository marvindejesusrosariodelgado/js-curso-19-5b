//Creamos una funcion llmada repetir

 function repetir(nombre, veces ) {


     
 
/**
 * 
 * imprimimos nombre el numero de vsc 1ue indique veces
 *  estos son unos comentarios especiales para indicar
 *  otros programadores que hace nuestra funcion
 * @author Marvin Rosario 
 * @version 0.1.0
 * @param {String} nombre
 * @param {Number} veces
 * @return {none}
 *  
 */
 
//creamos un ciclo for 

for (let index = 1; index < veces; index++) {

//la variable index se va a incrementando en 1 
//hasta que index < veces deje de ser cierto.
//mientras vamos agregando elementos p con el nombre
//nuestro doumento html.

 let element = document.createElement('p');

 element.innerText=(nombre)


 document.body.appendChild(element);


    
}


 }
 
const nom = prompt ('escriibe tu nombre');
const vsc = parseInt(prompt("Escribe la vsc que lo mostraras"));

repetir(nom, vsc)


