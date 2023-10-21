// Función para calcular el total del pedido basado en las selecciones del usuario
function calcularTotal() {
    // Recuperar el tipo de plato seleccionado por el usuario
    var tipoPlato = document.getElementById("tipoPlato").value;

    // Recuperar y convertir a entero la cantidad de platos seleccionados por el usuario
    var cantidadPlatos = parseInt(document.getElementById("cantidadPlatos").value);

    // Recuperar el tipo de bebida seleccionada por el usuario
    var bebida = document.getElementById("bebida").value;

    // Recuperar y convertir a entero la cantidad de bebidas seleccionadas por el usuario
    var cantidadBebidas = parseInt(document.getElementById("cantidadBebidas").value);

    // Diccionario con los precios de cada tipo de plato
    var preciosPlatos = {
        "Ajiaco": 40000,
        "Arroz Paisa": 35000,
        "Caldo Costilla": 15000
    };

    // Diccionario con los precios de cada tipo de bebida
    var precioBebida = {
        "Gaseosa": 3000,
        "Limonada": 2500,
        "Jugo Naranja": 2000
    };

    // Calcular el costo total de los platos seleccionados
    var totalPlatos = preciosPlatos[tipoPlato] * cantidadPlatos;

    // Calcular el costo total de las bebidas seleccionadas
    var totalBebidas = precioBebida[bebida] * cantidadBebidas;

    // Calcular el costo total del pedido sumando el total de platos y bebidas
    var total = totalPlatos + totalBebidas;

    // Mostrar el resultado en el elemento con id "resultado" del documento HTML
    var resultado = document.getElementById("resultado");
    resultado.textContent = "Total a pagar: $" + total;
}