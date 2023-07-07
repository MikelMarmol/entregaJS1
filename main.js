// Esta funcion indica pares e inpares
console.log("--------------EJERCICIO 1---------------");

function ParesImpares ( number ) {
    if ( number %2 === 0 ) {
        console.log('Este numero es PAR')
    }
    else {
        console.log('Este numero es IMPAR')
    }
}
ParesImpares ();


// esta funcion idica si el numero es mayor,menor o igual a 18
console.log("--------------EJERCICIO 2---------------");

function MayorMenor ( number ) {
    if ( number >18 ) {
        console.log('Este numero es MAYOR')
    }
    else if ( number <18 ) {
        console.log('Este numero es MENOR')
    }
    else {
        console.log('Este numero es IGUAL')
    }
    
}
MayorMenor (18);


// Esta funcion indica si el numero es multipo de 5
console.log("--------------EJERCICIO 3---------------");
function MultiplosdeCinco ( number ) {
    if ( number %5 === 0 ) {
        console.log('Este numero es multipo de 5')
    }
    else {
        return
    }
}
MultiplosdeCinco (10);




// Esta funcion hace una lista hasta el numero indicado
console.log("--------------EJERCICIO 4---------------");
for (let i = 0; i <= 15; i++ ) {
    console.log(i)
}


// Esta funcion hace que se repita una palabra la cantidad de veces que dice el numero
console.log("--------------EJERCICIO 5---------------");
function repetirPalabra(string, number) {
    return number <= 0 ? string = " " : string + repetirPalabra(string, number - 1) ;
    }
    let result = repetirPalabra("Argentina ", 5);
    console.log(result)
    

// Esta funcion recibe el array de los 5 grandes del futbol argentino
console.log("--------------EJERCICIO 6---------------");
let losgrandesArgentina = ['San lorenzo', 'Boca' , 'River' , 'Independiente' , 'Racing']
console.log(losgrandesArgentina)


// array que va del 1 al 10 y excluye al 5 
console.log("--------------EJERCICIO 7---------------");
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for ( let i = 0; i <= number.length; i++ ) {
     if (i == 4) {
        continue;
     }
console.log( number [i] )
}


// esta funcion multiplica todos los numero del array por 2
console.log("--------------EJERCICIO 8---------------");
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for ( let i = 0; i <= num.length; i++ ) {
console.log( num [i] * 2)
}




