// Funcion para realizar la suma de dos numeros
function sumar(n1, n2) {
    var resultado = n1 + n2;
    var res = document.getElementById("resultado");

    // Verifica que los numeros sean diferentes de cero
    if (n1 != 0 && n2) {
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = 'Verifique sus datos';
        res.style.color = "red";
    }
}

// Funcion para realizar la resta de dos numeros
function restar(n1, n2) {
    var resultado = n1 - n2;
    var res = document.getElementById("resultado");

    // Verifica que los numeros sean diferentes de cero
    if (n1 != 0 && n2) {
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = 'Verifique sus datos';
        res.style.color = "red";
    }
}

// Funcion para realizar la multiplicacion de dos numeros
function multiplicar(n1, n2) {
    var resultado = n1 * n2;
    var res = document.getElementById("resultado");

    // Verifica que los numeros sean diferentes de cero
    if (n1 != 0 && n2) {
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = 'Verifique sus datos';
        res.style.color = "red";
    }
}

// Funcion para realizar la division de dos numeros
function dividir(n1, n2) {
    var resultado = n1 / n2;
    var res = document.getElementById("resultado");

    // Verifica que los numeros sean diferentes de cero
    if (n1 != 0 && n2) {
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = 'Verifique sus datos';
        res.style.color = "red";
    }
}

// Funcion para calcular la potencia del primer numero
function potencia(n1, n2) {
    var resultado = n1 * n1;
    var res = document.getElementById("resultado");

    // Verifica que los numeros sean diferentes de cero
    if (n1 != 0 && n2) {
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = 'Verifique sus datos';
        res.style.color = "red";
    }
}

// Funcion principal que obtiene los valores y llama a la funcion correspondiente
function mostrar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let opc = parseInt(document.getElementById("opc").value);

    // Utiliza un switch para determinar la operacion seleccionada
    switch (opc) {
        case 1:
            sumar(n1, n2);
            break;
        case 2:
            restar(n1, n2);
            break;
        case 3:
            multiplicar(n1, n2);
            break;
        case 4:
            dividir(n1, n2);
            break;
        case 5:
            potencia(n1, n2);
            break;
        default:
            alert("La opcion no es valida");
    }
}
