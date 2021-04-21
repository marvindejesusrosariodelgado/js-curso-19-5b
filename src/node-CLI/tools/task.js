

require('colors');
const files = require('./files');

// Funcion crear una tarea nueva

const createTask = (title, desc) => {
    
    let listTask = files.loadTask();

    IF (title in listTask) {
        console.log("Esta tarea existe".red);
    } else {

listTask[title] = {
    title,
    desc,
    completed: false 
}        
files.saveTask(listTask);

    }

    return listTask[title];

}
















//TODO: Crear funcion marcar completed con true

const updateTask = (title) => {
let list = files.loadTask();

    if (title in list) {
        list[title] = {...list[title], completed: true }
        files.saveTask(list);
    } else {
        console.log(`Este titulo no existe ${title}`.red);
    }
}