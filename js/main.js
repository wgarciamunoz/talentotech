function validarNombre() {
  var nombre = document.getElementById("nombre").value;
  console.log(nombre);
  if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
    // Mostrar error
    document.getElementById("errorNombre").style.display = "block";
    // Aggregar clase de error
    document.getElementById("errorNombre").classList.add("errorNombre");
    // Mensaje de error
    document.getElementById("errorNombre").innerHTML = "El campo nombre no puede estar vacío.";
  } else {
    // Ocultar error
    document.getElementById("errorNombre").style.display = "none";
    // Eliminar clase de error
    document.getElementById("nombre").classList.remove("errorNombre");
  }

}

// validar teléfono

function validarTelefono() {
  var telefono = document.getElementById("telefono").value;
  console.log(telefono);
  // validar formato empieza por 3 dígitos pero el primero debe ser un 3, seguido de un guión, seguido de 3 dígitos, seguido de un guión, seguido de 4 dígitos
  var expresion = /^(3|6)\d{2}-\d{3}-\d{4}$/;

  if (!expresion.test(telefono) || telefono == null || telefono.length == 0) {
    // Mostrar error
    document.getElementById("errorTelefono").style.display = "block";
    // Aggregar clase de error
    document.getElementById("errorTelefono").classList.add("errorTelefono");
    // Mensaje de error
    document.getElementById("errorTelefono").innerHTML = "El formato del teléfono no es correcto.";
  } else {  
    // Ocultar error
    document.getElementById("errorTelefono").style.display = "none";
    // Eliminar clase de error
    document.getElementById("telefono").classList.remove("errorTelefono");
  } 

}

// validar correo

function validarCorreo() {
  var correo = document.getElementById("correo").value;
  console.log(correo);
  // validar formato de correo
  var expresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!expresion.test(correo) || correo == null || correo.length == 0) {
    // Mostrar error
    document.getElementById("errorCorreo").style.display = "block";
    // Aggregar clase de error
    document.getElementById("errorCorreo").classList.add("errorCorreo");
    // Mensaje de error
    document.getElementById("errorCorreo").innerHTML = "El formato del correo no es correcto.";
  } else {  
    // Ocultar error
    document.getElementById("errorCorreo").style.display = "none";
    // Eliminar clase de error
    document.getElementById("correo").classList.remove("errorCorreo");
  } 

}

document.getElementById("nombre").addEventListener("blur", validarNombre);
document.getElementById("telefono").addEventListener("blur", validarTelefono);
document.getElementById("correo").addEventListener("blur", validarCorreo);

// Evento click del botón enviar formulario
function enviarFormulario() {
  validarNombre();
  validarTelefono();
  validarCorreo();
}

document.getElementById("enviar").addEventListener("click", enviarFormulario);