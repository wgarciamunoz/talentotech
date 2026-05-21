/**
 * Módulo de cálculo de costos de envío
 */

const CalculadoraCostos = {
  /**
   * Calcula el costo de envío basado en peso y distancia
   * @param {number} peso - Peso del paquete en kg
   * @param {number} distancia - Distancia en km
   * @returns {number} - Costo del envío
   */
  calcular: function(peso, distancia) {
    if (peso > 0 && peso <= 500) {
      return distancia * 15000;
    } else if (peso > 500 && peso <= 1000) {
      return distancia * 20000;
    }
    return 0;
  }
};
