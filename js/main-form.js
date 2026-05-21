/**
 * Controlador del formulario de contacto
 * Maneja la validación y envío del formulario
 */

// ==================== Funciones de Validación ====================

function validarNombre() {
  const nombre = UI.obtenerValor('nombre');
  console.log(nombre);
  
  if (!Validador.noVacio(nombre)) {
    UI.mostrarError('errorNombre', 'El campo nombre no puede estar vacío.');
  } else {
    UI.ocultarError('errorNombre', 'nombre');
  }
}

function validarTelefono() {
  const telefono = UI.obtenerValor('telefono');
  console.log(telefono);
  
  if (!Validador.telefonoValido(telefono) || !Validador.noVacio(telefono)) {
    UI.mostrarError('errorTelefono', 'El formato del teléfono no es correcto.');
  } else {
    UI.ocultarError('errorTelefono', 'telefono');
  }
}

function validarCorreo() {
  const correo = UI.obtenerValor('correo');
  console.log(correo);
  
  if (!Validador.correoValido(correo) || !Validador.noVacio(correo)) {
    UI.mostrarError('errorCorreo', 'El formato del correo no es correcto.');
  } else {
    UI.ocultarError('errorCorreo', 'correo');
  }
}

// ==================== Event Listeners ====================

UI.addEventListener('nombre', 'blur', validarNombre);
UI.addEventListener('telefono', 'blur', validarTelefono);
UI.addEventListener('correo', 'blur', validarCorreo);

function enviarFormulario() {
  validarNombre();
  validarTelefono();
  validarCorreo();
}

UI.addEventListener('btnEnviar', 'click', enviarFormulario);
