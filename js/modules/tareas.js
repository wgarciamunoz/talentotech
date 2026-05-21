/**
 * Módulo de gestión de tareas
 */

const GestorTareas = {
  _tareas: [],

  /**
   * Agrega una tarea a la lista
   * @param {string} tarea - La tarea a agregar
   */
  agregar: function(tarea) {
    this._tareas.push(tarea);
  },

  /**
   * Elimina una tarea por índice
   * @param {number} index - Índice de la tarea a eliminar
   */
  eliminar: function(index) {
    if (index >= 0 && index < this._tareas.length) {
      this._tareas.splice(index, 1);
    }
  },

  /**
   * Modifica una tarea existente
   * @param {number} index - Índice de la tarea a modificar
   * @param {string} nuevaTarea - Nueva tarea
   */
  modificar: function(index, nuevaTarea) {
    if (index >= 0 && index < this._tareas.length) {
      this._tareas[index] = nuevaTarea;
    }
  },

  /**
   * Obtiene todas las tareas
   * @returns {Array} - Array de tareas
   */
  obtenerTodas: function() {
    return [...this._tareas];
  },

  /**
   * Limpia todas las tareas
   */
  limpiar: function() {
    this._tareas = [];
  }
};
