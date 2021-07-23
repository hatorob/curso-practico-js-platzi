function calcularPrecioConDescuento(precio, descuento) {
    const descuentoPorcentaje = descuento / 100;
    return precioDescuento = precio - (precio * descuentoPorcentaje);
}

function ImprimirPrecioConDescuento() {
    const inputOne = document.getElementById("InputPrice");
    const inputTwo = document.getElementById("InputDescuento");

    const precio = Number(inputOne.value);
    const descuento = Number(inputTwo.value);

    const resultado = calcularPrecioConDescuento(precio, descuento);

    document.getElementById("resultado").innerHTML = resultado;
}