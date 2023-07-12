console.log("Hola Mundo")
console.log("probando JS desde script.js")



// let para crear variables

// declaración de variable
let hobby;

console.log( hobby ) // js me dice, aqui no hay nada

// inicialización de la variable
hobby = "Escalar"

console.log( hobby )

hobby = "Futbol"

console.log( hobby )



// declarar e inicializar una variable

let anotherHobby = "Padel";

console.log( anotherHobby );


let oneLastHobby = anotherHobby;

console.log( oneLastHobby )


// const para crear variable

const birthdate = "10/2/1990";

// birthdate = "5/8/1992";
// con const, nosotros no podemos reasignar un valor a la variable


// const someConst;// no está permitido




// se pueden crear con var pero no lo hagan

// - var es una palabra creada antes de ES6
// - var genera un effecto de hoisting (es algo c¡que puede crear muchos bugs)
// - con ES6 se reemplazó var por let o const


// que nombres usar para variables

// - no podemos empezar variables con numeros
// let 1fruta;

// - no podemos crear variables con nombres reservados
// https://www.w3schools.com/js/js_reserved.asp
// let import;

// let estaesmifrutafavoritaever;
// usar camelCasing

let estaEsMiFrutaFavoritaEver;



// tipos de variable y la palabra typeof

let variable1 = "hola";
console.log(variable1, typeof variable1)

let variable2 = 10;
console.log(variable2, typeof variable2)

let variable3 = true;
console.log(variable3, typeof variable3)

let variable4 = { name: "Pedro" }
console.log(variable4, typeof variable4)

let variable5 = [ "hola", 10 ]
console.log(variable5, typeof variable5) // es de tipo object

let variable6 = undefined // es cuando sistema determina algo vacio
console.log(variable6, typeof variable6) // undefined undefined

let variable7 = null // es cuando el desarrollador indica que algo está vacio
console.log(variable7, typeof variable7) // SI ES DE TIPO null

let variable8 = NaN;
console.log(variable8, typeof variable8) // tipo de data number


let unaCaja = null; // el desarrollador indicando que está vacia temporalmente


unaCaja = "un valor";


// STRING

let fruit1 = "fresa";
let fruit2 = "banana";
let fruit3 = "tomate";

let receta = "La receta lleva: " + fruit1 + ", " + fruit2 + fruit3; // concatenacion

console.log( receta )


// puedo usar una tecnica llamada interpolacion de strings ${}
// ``backticks


let unaReceta = `La receta lleva: ${fruit1}, ${fruit2} y ${fruit3}`

console.log(unaReceta)


// Index de strings


let simpleWord = "holajagsdjaghsdjagpatatahsdjadghjahsgdjagsd"; // cada caracter tine una posición dentro del string
//                ||||
//                0123

console.log( simpleWord[0] ) // notación de corchetes
console.log( simpleWord.charAt(0) ) // o usando el metodo chartAt()
console.log( simpleWord[2] ) // notación de corchetes



// propieda length
console.log( simpleWord.length ) // la cantidad de caracteres


console.log( simpleWord[ simpleWord.length - 1 ] ) // el ultimo caracter usando el .length

console.log( simpleWord[ simpleWord.length ] ) // no existe esta posición

// metodos de strings (acciones que podemos hacer)

let posicionDeLetraD = simpleWord.indexOf("patata")
console.log(posicionDeLetraD)


let longWord = "bananaramawakawakaehehsamiraramira"

// .slice() => hacer un copia de una seccion del string


let positionOfW = longWord.indexOf("w")

let stringSegment = longWord.slice(positionOfW, positionOfW + 6)
console.log(stringSegment)

let uppercased = stringSegment.toUpperCase()
console.log(uppercased)

// capitalizar una palabra stringSegment

let capitalizeFirstLetter = stringSegment.slice(0,1).toUpperCase()

let capitalizeTotal = capitalizeFirstLetter + stringSegment.slice(1)

console.log(capitalizeTotal)

let capitazed = stringSegment[0].toUpperCase() + stringSegment.slice(1)
console.log(capitazed)




