function CalcularDivisionGastos(disponibleMensual) {
    const divisionGastos = {
        transporte: 0.20,
        comida: 0.35,
        servicios: 0.35,
        libres: 0.10
    }

    const disponibleTransporte = disponibleMensual * divisionGastos.transporte;
    const disponibleComida = disponibleMensual * divisionGastos.comida;
    const disponibleServicios = disponibleMensual * divisionGastos.servicios;
    const disponibleLibre = disponibleMensual * divisionGastos.libres;

    document.getElementById("imprimir-disponible__transporte").innerHTML = `$${disponibleTransporte}`;
    document.getElementById("imprimir-disponible__comida").innerHTML = `$${disponibleComida}`;
    document.getElementById("imprimir-disponible__servicios").innerHTML = `$${disponibleServicios}`;
    document.getElementById("imprimir-disponible__libres").innerHTML = `$${disponibleLibre}`;
}


function extraerPorcentajeDeAhorro(dato) {
    const ahorroPorcentual = {
        ahorro10Porciento: ["tenPorcent", 0.10],
        ahorro20Porciento: ["twentyPorcet", 0.20],
        ahorro30Porciento: ["thirtyPorcent", 0.30],
        ahorro40Porciento: ["fourtyPorcent", 0.40],
        ahorro50Porciento: ["fiftyPorcent", 0.50]
    }

    if (dato === ahorroPorcentual.ahorro10Porciento[0]) {
        return ahorroPorcentual.ahorro10Porciento[1];
    } else if (dato === ahorroPorcentual.ahorro20Porciento[0]) {
        return ahorroPorcentual.ahorro20Porciento[1];
    } else if (dato === ahorroPorcentual.ahorro30Porciento[0]) {
        return ahorroPorcentual.ahorro30Porciento[1];
    } else if (dato === ahorroPorcentual.ahorro40Porciento[0]) {
        return ahorroPorcentual.ahorro40Porciento[1];
    } else {
        return ahorroPorcentual.ahorro50Porciento[1];
    }
}


function calcularAhorroConDisponible() {
    const sueldo = Number(document.getElementById("sueldo").value);
    const ahorroPorciento = document.getElementById("ahorroPorcentaje").value;
    const deudas = Number(document.getElementById("pagosObligatorios").value);

    const ahorroMensual = sueldo * extraerPorcentajeDeAhorro(ahorroPorciento);
    const disponibleMensual = sueldo - (ahorroMensual + deudas);
    const disponibleItems = CalcularDivisionGastos(disponibleMensual);

    document.getElementById("imprimir-ahorro").innerHTML = `$${ahorroMensual}`;
    document.getElementById("imprimir-disponible").innerHTML = `$${disponibleMensual}`;

}

function gastosTransporte() {
    const gastos = Number(document.getElementById("gastos-transporte").value);
    document.getElementById("imprimir-gasto__transporte").innerHTML = gastos;

    const disponibleTransporte = document.getElementById("imprimir-disponible__transporte").innerHTML;
    const stringSinPeso = disponibleTransporte.substring(1, disponibleTransporte.length);
    const ValorDisponible = Number(stringSinPeso);

    const disponibleDescontado = ValorDisponible - gastos;
    document.getElementById("imprimir-disponible__transporte").innerHTML = `$${disponibleDescontado}`;

    // resultado-relacion__transporte

    const relación = (1 - (gastos / ValorDisponible)) * 100;
    document.getElementById("resultado-relacion__transporte").innerHTML = `${Math.round(relación, 2)}%`;

}

function gastosComida() {
    const gastos = Number(document.getElementById("gastos-comida").value);
    document.getElementById("imprimir-gasto__comida").innerHTML = gastos;

    const disponibleTransporte = document.getElementById("imprimir-disponible__comida").innerHTML;
    const stringSinPeso = disponibleTransporte.substring(1, disponibleTransporte.length);
    const ValorDisponible = Number(stringSinPeso);

    const disponibleDescontado = ValorDisponible - gastos;
    document.getElementById("imprimir-disponible__comida").innerHTML = `$${disponibleDescontado}`;

    // resultado-relacion__transporte

    const relación = (1 - (gastos / ValorDisponible)) * 100;
    document.getElementById("resultado-relacion__comida").innerHTML = `${Math.round(relación, 2)}%`;
}

function gastosServicios() {
    const gastos = Number(document.getElementById("gastos-servicios").value);
    document.getElementById("imprimir-gasto__servicios").innerHTML = gastos;

    const disponibleTransporte = document.getElementById("imprimir-disponible__servicios").innerHTML;
    const stringSinPeso = disponibleTransporte.substring(1, disponibleTransporte.length);
    const ValorDisponible = Number(stringSinPeso);

    const disponibleDescontado = ValorDisponible - gastos;
    document.getElementById("imprimir-disponible__servicios").innerHTML = `$${disponibleDescontado}`;

    // resultado-relacion__transporte

    const relación = (1 - (gastos / ValorDisponible)) * 100;
    document.getElementById("resultado-relacion__servicios").innerHTML = `${Math.round(relación, 2)}%`;
}

function gastosLibres() {
    const gastos = Number(document.getElementById("gastos-libres").value);
    document.getElementById("imprimir-gasto__libres").innerHTML = gastos;

    const disponibleTransporte = document.getElementById("imprimir-disponible__libres").innerHTML;
    const stringSinPeso = disponibleTransporte.substring(1, disponibleTransporte.length);
    const ValorDisponible = Number(stringSinPeso);

    const disponibleDescontado = ValorDisponible - gastos;
    document.getElementById("imprimir-disponible__libres").innerHTML = `$${disponibleDescontado}`;

    // resultado-relacion__transporte

    const relación = (1 - (gastos / ValorDisponible)) * 100;
    document.getElementById("resultado-relacion__libres").innerHTML = `${Math.round(relación, 2)}%`;
}