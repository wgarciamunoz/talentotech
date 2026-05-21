/**
 * Utilidades para manejo de UI y DOM
 */

const UI = {
  /**
   * Muestra un mensaje de error en un elemento
   * @param {string} elementoId - ID del elemento donde mostrar el error
   * @param {string} mensaje - Mensaje de error
   */
  mostrarError: function(elementoId, mensaje) {
    const elemento = document.getElementById(elementoId);
    if (elemento) {
      elemento.style.display = 'block';
      elemento.classList.add(`error${elementoId.replace('error', '')}`);
      elemento.innerHTML = mensaje;
    }
  },

  /**
   * Oculta un mensaje de error
   * @param {string} elementoId - ID del elemento del error
   * @param {string} inputId - ID del input asociado
   */
  ocultarError: function(elementoId, inputId) {
    const elemento = document.getElementById(elementoId);
    const input = document.getElementById(inputId);
    if (elemento) {
      elemento.style.display = 'none';
    }
    if (input) {
      input.classList.remove(`error${elementoId.replace('error', '')}`);
    }
  },

  /**
   * Obtiene el valor de un input
   * @param {string} elementoId - ID del input
   * @returns {string} - Valor del input
   */
  obtenerValor: function(elementoId) {
    const elemento = document.getElementById(elementoId);
    return elemento ? elemento.value : '';
  },

  /**
   * Establece el texto de un elemento
   * @param {string} elementoId - ID del elemento
   * @param {string} texto - Texto a establecer
   */
  setTexto: function(elementoId, texto) {
    const elemento = document.getElementById(elementoId);
    if (elemento) {
      elemento.innerHTML = texto;
    }
  },

  /**
   * Agrega un event listener a un elemento
   * @param {string} elementoId - ID del elemento
   * @param {string} evento - Tipo de evento
   * @param {function} callback - Función callback
   */
  addEventListener: function(elementoId, evento, callback) {
    const elemento = document.getElementById(elementoId);
    if (elemento) {
      elemento.addEventListener(evento, callback);
    }
  }
};
