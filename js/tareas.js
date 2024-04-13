
const tareas = [];


function agregarTarea(tarea) {
    tareas.push(tarea);
}


function eliminarTarea(index) {
    tareas.splice(index, 1);
}


function modificarTarea(index, nuevaTarea) {
    tareas[index] = nuevaTarea;
}


const formTarea = document.getElementById("formTarea");
const inputTarea = document.getElementById("inputTarea");
const listaTareas = document.getElementById("listaTareas");


function enviarTarea() {
    const tarea = inputTarea.value.trim();
    if (tarea !== "") {
        agregarTarea(tarea); 
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = tarea;
        listaTareas.appendChild(nuevaTarea);
        inputTarea.value = ""; 
    }
}


document.getElementById("btnAgregar").addEventListener("click", enviarTarea);