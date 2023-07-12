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


// NUMBERS

let posNum = 555;
let negNum = -20;
let floatNum = 0.73172836;

console.log(posNum, negNum, floatNum)


// Math

let num1 = 6;
let num2 = 2;


console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 ** num2)

// modulo % => restante de el intento de la división

console.log(num1 % num2) // 2 + 2 + 2 = 6 => 0

console.log( 7 % 3 ) // => 3 + 3 => 

// usar % para determinar si un numero es par o impar



// operador de asignacion y matematicos



let myAge = 30;

myAge = myAge + 1;

console.log(myAge);

// += o -= o *= /=

myAge += 1; // hace exactamente lo mismo que: myAge = myAge + 1;
console.log(myAge);

// ++ y --

myAge++; // hace exactamente lo mismo que: myAge = myAge + 1;
console.log(myAge)



// 

console.log( 3 + 5 ); // sumando numeros
console.log( "3" + "5" ); // concatenando strings

console.log( "5" - "3" ); // en JS - solo funciona para numeros
// en JS ocurre muchas veces lo que se llama COERCION

// COERCION  es cuando JS intenta cambiar un tipo de data a otro para resolver una evaluacion

console.log( "javascript" - "script" ) // intenta coercionar a un numero. no puede y nos da NaN => Not a Number.

console.log( "javascript" + 5) // JS primero intenta concatenar

console.log( 5 + "5" ); // JS primero intenta concatenar


// metodos de numeros. Objeto global => Math.

let maxNumber = Math.max(10, 2, 24)
console.log(maxNumber)

let minNumber = Math.min(10, 2, 24)
console.log(minNumber)

let randomNumber = Math.random() * 50 // no se le pasa argumento
console.log(randomNumber)

// Math.floor(), Math.round(), Math.ceil()
console.log( Math.floor(randomNumber) )

let randomNumber2 = Math.random() * 50 // no se le pasa argumento
console.log(randomNumber2)

// Math.floor(), Math.round(), Math.ceil()
console.log( Math.floor(randomNumber2) )


// BOOLEANS


let posBool = true;
let negBool = false;


console.log(posBool)
console.log(negBool)

// (!) Operador not

console.log(!posBool) // => invierte el valor booleano


// operadores de comparacion

let food1 = "hamburguesa";
let food2 = "pizza";
let food3 = "Hamburguesa";

console.log( food1 === food2 );
console.log( food1 === food3 ); // JS es 100% case sensitive (sensible a mayusculas y minusculas)
console.log( food1 !== food2 )

// JS evalua caracteres por el codigo ASCII de ese caracter
// https://www.w3schools.com/charsets/ref_html_ascii.asp


// let var1 = 6 * 2;
// let var2 = 6 + 6;
// console.log(var1 === var2)




let number1 = 12;
let number2 = 8;

// > o < o >= o <=

console.log( number1 > number2 )


console.log( "a" > "f" ); // false => en estos casos JS va a comparar por su codigo numerico

console.log( "a" > 100 ); 



// === o ==

console.log( "5" === "5" ); // true;
console.log( "5" === 5 ); // es false porque son tipos de data diferentes

console.log( "5" == 5 ); // coercion => cuando usamos (==) js intenta coercionar los elementos a ser el mismo tipo de data, y luego compara los valores.

// siempre que podamos utilizar === (estrictamente igual) y evitar usar == (podria causar problemas en la comparacion)

// . !== => estrictamente no igual
// . != permite coercion


// operadores logicos


// && o ||

console.log( "manzana" === "manzana" && 5 === 10 )
//                     true          &&   false
// && si una es falsa, TODO es falso
// && solo es verdadero cuando TODAS la condiciones son verdaderas

console.log( "manzana" === "manzana" || 5 === 10 )
//                     true          &&   false
// || si una es verdadero, TODO es verdadero
// || solo es falso si TODAS son falsas

// JS utiliza PEMDAS

// Parentesis
// Exponenciales
// Multiplicaciones
// Divisiones
// Adiciones (sumas)
// Substracciones (restas)



// Guess the console input for each console.log

console.log("*** ACTIVIDAD ***")

// Part 1.

console.log(true && false); 
console.log(11 % 3 === 2); 
console.log(false || true); 
console.log(!true || false); 
console.log(17 == '17'); 
console.log(123 === '123'); 
console.log('Hello' - 'llo');

// Part 2.

let statement = 'i love javaScript!';

console.log(statement.indexOf("I")) // -1 usualmente significa: no lo consigue

let subStatement = statement.slice(7, -1);
console.log(subStatement);

console.log(statement[0].toUpperCase()) // evaluamos un valor pero no modificamos el string

statement.toUpperCase(); // no cambia el string

console.log(statement); 

// los strings y todos los valores primitos de JS son inmutables



// condicionales


// syntaxis

// if (/* condicion*/) {
//   /* ejecucion en caso que la condicion sea verdadero */
// } else {
//   /* ejecucion en caso que la condicion sea falso*/
// }



let oranges = undefined;
// let name = "Dani"
// if ( oranges === 0 ) {
//   console.log( "No tienes naranjas" )
// }

// if ( oranges > 0 && oranges < 50 ) {
//   console.log( "tienes unas narajas para hacer zumo" )
// }

// if ( oranges >= 50 ) {
//   console.log( "tienes zumo para toda la semana" )
// }


if ( oranges === 0 ) {
  // si la condicion es true, ejecuta y ignora todas las demas condiciones
  console.log( "No tienes naranjas" )
  // if (name === "Dani") {
  //   console.log("bienvenido de vuelta Dani")
  // }
} else if ( oranges > 0 && oranges < 50 ) {
  console.log( "tienes unas narajas para hacer zumo" )
} else if ( oranges >= 50 ) {
  console.log( "tienes zumo para toda la semana" )
} else {
  // cuando ninguna condicion anterior se cumple
  console.log("No entendi la instruccion :(")
}


// SWITCH


// solo podriamos usar switch cuando temos MUCHOS posibles valores de condiciones y evaluamos estrictamente igual.

let color = "amarillo";

switch( color ) {

  case "amarillo":
    console.log("estas son cosas amarillas: bananas, lapices, minions");
    // break; // luego de resultar esta condicion, deten el switch
  case "amarillo o verde":
    console.log("estas son cosas amarillas o verdes: plantita, catcus");
    break;
  case "rojo":
    console.log("estas son cosas rojas: manzanas, fresas, sandias por dentro");
    break;
  case "azul":
    console.log("estas son cosas azul: cielo, pitufos");
    break;
  default:
    // cualquier otro caso posible
    console.log("no conozco ese color :(")

}
