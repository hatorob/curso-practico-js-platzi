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

function calcularDescuentoCupon(cupon) {

    const cupones = {
        cuponRegalo: ["cuponRegalo", 10],
        cuponCompraAnterior: ["cuponCompraAnterior", 20],
        cuponNavideno: ["cuponNavideno", 35]
    }

    if (cupones.cuponRegalo[0] === cupon) {
        return calcularPrecioConDescuento(400, cupones.cuponRegalo[1]);
    } else if (cupones.cuponCompraAnterior[0] === cupon) {
        return calcularPrecioConDescuento(400, cupones.cuponCompraAnterior[1]);
    } else {
        return calcularPrecioConDescuento(400, cupones.cuponNavideno[1]);
    }
}

function ImprimirPrecioConDescuentoCupon() {
    const input = document.getElementById("cupones");

    const cupon = input.value;

    const descuento = calcularDescuentoCupon(cupon);

    document.getElementById("resultadoCupon").innerHTML = descuento
}