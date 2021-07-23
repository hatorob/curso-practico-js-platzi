//Codigo del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrada(lado) {
    return lado * lado;
}

console.groupEnd();

console.group("triangulo")

function perimetroTriangulo(ladoTrangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTrangulo1 + ladoTriangulo2 + baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTraingulo) {
    return (baseTriangulo * alturaTraingulo) / 2;
}


function alturaTriangulo(ladoTrangulo1, baseTraingulo) {

    return Math.sqrt(Math.pow(ladoTrangulo1, 2) - Math.pow((baseTraingulo / 2), 2));
}
console.groupEnd();


//Codigo del circulo
console.group("Circulos")

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}
console.groupEnd();



// Aquí interactuamos con el html
// Cuadrado
function calcularPerimentroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    document.getElementById("resultado").innerHTML = perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrada(value);

    document.getElementById("resultado").innerHTML = area;
}

//Triangulo

function calcularPerimentroTriangulo() {
    const input = document.getElementById("InputLado1");
    const inputTwo = document.getElementById("InputLado2");
    const inputB = document.getElementById("InputBase");
    const ladoUno = Number(input.value);
    const ladoDos = Number(inputTwo.value);
    const base = Number(inputB.value);

    console.log(ladoUno);
    console.log(ladoDos);
    console.log(base);

    const perimetro = perimetroTriangulo(ladoUno, ladoDos, base);

    document.getElementById("resultadoTraingulo").innerHTML = perimetro;
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputLado1");
    const inputTwo = document.getElementById("InputLado2");
    const inputB = document.getElementById("InputBase");
    const ladoUno = Number(input.value);
    const ladoDos = Number(inputTwo.value);
    const base = Number(inputB.value);

    const area = areaTriangulo(base, alturaTriangulo(ladoUno, base));

    document.getElementById("resultadoTraingulo").innerHTML = area;
}

function calcularPerimentroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value);

    document.getElementById("resultadoCirculo").innerHTML = perimetro;
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value);

    document.getElementById("resultadoCirculo").innerHTML = area;
}