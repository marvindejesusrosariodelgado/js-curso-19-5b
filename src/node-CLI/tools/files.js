
require('colors');
//Importamos el paquete de default de node para manejar archivos fs
const fs = require('fs');
const path = require('path');

//  Guradamos el path a nuestro task,json
const filePath = path.join(__dirname, '../db/task.joon');

// Funcion para cargar task desde task.json
const loadTask = () => {
let listTask = {};
// Nos muestra el path o ruta de nuestro proceso
console.log("Ruta absoluta de nuestra base de datos: ".yellow, process.cwd())

// Nos muestra el path o ruta de nuestro fake db.json
console.log("Ruta absoluta de nuestra base de datos: ".yellow, filePath)

try{
    listTask = require(filePath);
} catch (error) {
    console.log("Error cargando lista de bd".red, error);
    listTask = {}
}
return listTask;
}

// Funcion para guardar los Task en task.json 
const saveTask = (listTask) => {
    
let data = JSON.stringify(listTask);


fs.writeFile(filePath, data, (error) => {
    if  (error) {
        throw new Error("Error Create by me: --", error);

        }
    })

}

module.exports = {
    loadTask,
    saveTask
}
