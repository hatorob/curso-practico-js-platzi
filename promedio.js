function calcularMediaAritmetica(lista) {
    /*  let sumaLista = 0; */

    /* for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
        console.log(sumaLista);
    } */

    //Metodo con lo que podemos iterar dentro de estos elementos

    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    console.log(promedioLista);
}

// Calcular mediana
/* 
const lista1 = [
    100,
    200,
    500,
    50000000,
]
 */



//Mediana

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true
    } else {
        return false
    }
}



function calcularMediana(lista1) {

    const lista = lista1.sort((a, b) => a - b);
    console.log(lista);
    const mitadLista1 = parseInt(lista.length / 2);
    let mediana;
    console.log(mediana);
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista1 - 1];
        const elemento2 = lista[mitadLista1];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

        mediana = promedioElemento1y2;
        console.log(mediana);
    } else {
        mediana = lista1[mitadLista1];
        console.log(mediana);
    }
}


// Moda



function calcularModa(lista1) {

    const lista1Count = {};

    lista1.map(
        function(elemento) {
            if (lista1Count[elemento]) {
                /* lista1Count[elemento] = lista1Count[elemento] + 1; */
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );



    const lista1Array = Object.entries(lista1Count).sort(
        function(valorAcomulado, nuevoValor) {
            return valorAcomulado[1] - nuevoValor[1];
        });

    const moda = lista1Array[lista1Array.length - 1];

    console.log(moda);
}