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

for (let index = 1; index <= veces; index++) {

//la variable index se va a incrementando en 1 
//hasta que index < veces deje de ser cierto.
//mientras vamos agregando elementos p con el nombre
//nuestro doumento html.

 let element = document.createElement('p');

 element.innerText=(nombre)


 document.body.appendChild(element);


    
}


 }
 
const nom = prompt ('escribe tu nombre');
const vsc = parseInt(prompt("Escribe la vsc que lo mostraras"));

repetir(nom, vsc)


let name = maria;

if(true) { var name = "pedro" }

console.log("saludos", name);

var a = 15;
let b = "1"

const result = a + b;

console.log("resultado: ", result);

let a = 2;
const b = 5;

const result = 5 + 3 * (a + b) % 2;

console.log("Resultado: ", result);

let a = 2;
let b = 5;
let result = 'hola';

if (a && 0 ){

    result+= "a and 0 es verdadero";

} else if (a < b) {
 
    result += "a < b es verdadero";
} else{
    result += " No se cumple el iif ni el if-else"
}


console.log("resutado", result);

let obj_x = {
    nombre: "Pedro",
    edad: 18
};

let obj_y = {
    nombre: "Juan",
    edad: 12
};

const mayor = (obj_y.edad > obj_x.edad) ? obj_y : obj_x;

console.log("Resultado: Nombre: ", mayor.nombre, "Edad: ", mayor.edad);


var foo = ["a", "b", 3,"C", 'No existe'];

switch (fool[1]) {

    case"a":
    console.log('el caso es a');
    break;

    case "b":
        console.log( "Se acaba de dar el caso b sin frenos!")

        case 3:
            console.log("El caso b o 3 due seleccionado"):
break;

            case "C":
                console.log("El caso solo funciona con C mayuscula");
                break;

                default:
                    console.log('default no existe el caso que corresponda');
}



