/**
 * Controlador de la lista de tareas
 */

// ==================== Funciones ====================

function enviarTarea() {
  const tarea = UI.obtenerValor('inputTarea').trim();
  
  if (tarea !== '') {
    GestorTareas.agregar(tarea);
    
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = tarea;
    
    const listaTareas = document.getElementById('listaTareas');
    if (listaTareas) {
      listaTareas.appendChild(nuevaTarea);
    }
    
    // Limpiar input
    const inputTarea = document.getElementById('inputTarea');
    if (inputTarea) {
      inputTarea.value = '';
    }
  }
}

// ==================== Event Listeners ====================

UI.addEventListener('btnAgregar', 'click', enviarTarea);
