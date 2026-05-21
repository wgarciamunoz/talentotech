/**
 * Controlador de la calculadora de costos de envío
 */

// ==================== Funciones ====================

function calcular() {
  const peso = parseFloat(UI.obtenerValor('peso'));
  const distancia = parseFloat(UI.obtenerValor('distancia'));
  
  if (Validador.pesoValido(peso) && Validador.distanciaValida(distancia)) {
    const costo = CalculadoraCostos.calcular(peso, distancia);
    UI.setTexto('costo', `El costo del envío es de $${costo.toLocaleString()}`);
  } else {
    UI.setTexto('costo', 'Los datos ingresados no son válidos');
  }
}

// ==================== Event Listeners ====================

UI.addEventListener('btnEnviar', 'click', calcular);
