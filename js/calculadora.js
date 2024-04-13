function validarPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validarDistancia(distancia) {
    if (distancia > 0 && distancia < 1000) {
        return true;
    } else {
        return false;
    }
}

function calcularCosto(peso, distancia) {
    var costo = 0;
    if (peso > 0 && peso <= 500) {
        costo = distancia * 15000;
    } else if (peso > 500 && peso <= 1000) {
        costo = distancia * 20000;
    }
    return costo;
}

function calcular() {
    var peso = document.getElementById("peso").value;
    var distancia = document.getElementById("distancia").value;
    if (validarPeso(peso) && validarDistancia(distancia)) {
        var costo = calcularCosto(peso, distancia);
        document.getElementById("costo").innerHTML = "El costo del envío es de $" + costo;
    } else {
        document.getElementById("costo").innerHTML = "Los datos ingresados no son válidos";
    }
}

document.getElementById("btnEnviar").addEventListener("click", calcular);