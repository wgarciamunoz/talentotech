/**
 * Utilidades para validación de formularios
 */

const Validador = {
  /**
   * Valida que un campo no esté vacío
   * @param {string} valor - El valor a validar
   * @returns {boolean} - True si es válido
   */
  noVacio: function(valor) {
    return valor !== null && valor.length > 0 && !/^\s+$/.test(valor);
  },

  /**
   * Valida formato de teléfono (3xx-xxx-xxxx o 6xx-xxx-xxxx)
   * @param {string} telefono - El número de teléfono
   * @returns {boolean} - True si el formato es correcto
   */
  telefonoValido: function(telefono) {
    const expresion = /^(3|6)\d{2}-\d{3}-\d{4}$/;
    return expresion.test(telefono);
  },

  /**
   * Valida formato de correo electrónico
   * @param {string} correo - El correo electrónico
   * @returns {boolean} - True si el formato es correcto
   */
  correoValido: function(correo) {
    const expresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return expresion.test(correo);
  },

  /**
   * Valida que un peso esté en rango permitido
   * @param {number} peso - El peso a validar
   * @returns {boolean} - True si está en rango
   */
  pesoValido: function(peso) {
    return peso > 0 && peso < 1000;
  },

  /**
   * Valida que una distancia esté en rango permitido
   * @param {number} distancia - La distancia a validar
   * @returns {boolean} - True si está en rango
   */
  distanciaValida: function(distancia) {
    return distancia > 0 && distancia < 1000;
  }
};
