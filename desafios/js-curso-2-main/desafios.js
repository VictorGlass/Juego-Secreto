//Cambia el contenido de la etiqueta h1 con document.querySelector 
//y asigna el siguiente texto: "Hora del Desafío".

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hola del Desafio';


//Crea una función que muestre en la consola el mensaje 
//"El botón fue clicado" siempre que se presione el botón 
//"Console".

function botonConsole() {
    alert('El boton fue clicado');
}


//Crea una función que se ejecute cuando se haga clic en 
//el botón "prompt", preguntando el nombre de una ciudad de Brasil. 
//Luego, muestra una alerta con el mensaje concatenando la respuesta 
//con el texto: "Estuve en {ciudad} y me acordé de ti".

function botonPrompt() {
    let respuestaUs = prompt("Que ciudad de brasil conoces?");
    alert(`Estuve en ${respuestaUs} y me acordé de ti`);
}

//Crea una función que muestre una alerta con el mensaje: 
//"Yo amo JS" siempre que se presione el botón "Alerta".
function botonAlerta() {
    alert('¡Yo amo JS!');
}

//Al hacer clic en el botón "suma", pide 2 números y 
//muestra el resultado de la suma en una alerta.
alert("Bienvenido! Sumemos juntos, presiona el boton Suma")

function botonSuma() {
    let num1 = prompt("Ingresa el primer numero");
    num1 = parseFloat(num1);

    let num2 = prompt("Ingresa el segundo numero");
    num2 = parseFloat(num2);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        let suma = num1 + num2;
        alert("La suma de " + num1 + " y " + num2 + " es " + suma);
    } else {
        alert("Por favor ingresa un valor numerico valido");
    }
}



//Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo() {
    console.log("¡Hola, Mundo!");
}
saludo();

//Crear una función que reciba un nombre como parámetro 
//y muestre "¡Hola, [nombre]!" en la consola.
function saludo2() {
    let nombreU = prompt("Cual es tu nombre?");
    console.log(`¡Hola, ${nombreU} como estas?`);
}
saludo2();



//Crear una función que reciba un número como parámetro
// y devuelva el doble de ese número.
function numeroDoble() {
    let numeroIngresado = prompt("Ingresa un numero y duplicare");
    let resultadoNum = numeroIngresado * 2;
    console.log(`El doble de ${numeroIngresado} es ${resultadoNum}`);
    return numeroIngresado * 2;
    
}
numeroDoble();



//Crear una función que reciba tres números como 
//parámetros y devuelva su promedio.
alert('Bienvenido! Vamos a calcular un promedio de 3 numeros');
function calcPromedio() {
    let numero1 = parseFloat(prompt("Ingresa el primer numero"));
    let numero2 = parseFloat(prompt("Ingresa el segundo numero"));
    let numero3 = parseFloat(prompt("Ingresa el tercer numero"));

    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
        let promedio = (numero1 + numero2 + numero3) / 3;             //toFixed para mostrar 2 decimales.
        alert("El promedio de los numeros ingresados es: " + promedio);
    } else {
        alert("Por favor, ingresa valores numericos validos")
    }
}
calcPromedio();



//Crear una función que reciba dos números como parámetros
// y devuelva el mayor de ellos.
alert('Bienvenido! ingresa dos numeros y te dire el mayor');
function numeroMayor() {
    let num1 = parseFloat(prompt("Ingresa el primer numero"));
    let num2 = parseFloat(prompt("Ingresa el segundo numero"));

    if (!isNaN(num1) && !isNaN(num2)) {
        //Operador ternario: si num1 es mayor que num2
        //mayor tomara el valor de num1, de lo contrario
        //tomara el valor de num2.
        let mayor = (num1 > num2) ? num1 : num2;
        alert(`El numero mayor entre: ${num1} y ${num2} es: ${mayor}`);
    } else {
        alert('Por favor, ingresa valores numericos validos');
    }
}
numeroMayor();



//Crear una función que reciba un número como parámetro y 
//devuelva el resultado de multiplicar ese número por sí mismo.
alert('Bienvenido! ingresa un numero y lo multiplicare por si mismo');
function numeroMultiplicado() {
    let numUsuario = parseFloat(prompt("Ingresa el numero"));

    if (!isNaN(numUsuario)) {
        let resultadoNum = numUsuario * numUsuario;
        alert(`El cuadrado del numero que ingresaste es: ${resultadoNum}`);
    } else {
        alert('Por favor, ingresa valores numericos validos');
    }
}

numeroMultiplicado();



//Crea una función que calcule el índice de masa corporal (IMC) 
//de una persona a partir de su altura en metros y peso en kilogramos,
//que se recibirán como parámetros.
alert('Bienvenido! calculemos tu IMC');

//Funcion para calcular el IMC.
function calcularIMCD(peso, altura) {
    //debe retornar el calculo del IMC.
    return peso / (altura * altura);
}

//funcion para solicitarDatosIMC.
function solicitarDatos() {
    let peso = parseFloat(prompt("Ingresa tu peso en kilogramos"));
    let altura = parseFloat(prompt("Ingresa tu altura en metros"));

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        let imc = calcularIMCD(peso, altura);
        alert('Tu IMC es: ' + imc.toFixed(2));
    } else {
        alert('Por favor, ingresa valores numericos validos');
    }
}
solicitarDatos();



//Crea una función que calcule el valor del factorial 
//de un número pasado como parámetro.
function calcularFactorial(numero) {
    //Si el numero es 0, su factorial es 1.
    if (numero === 0) {
        return 1;
    }
    return numero * calcularFactorial(numero - 1);
}

//Funcion para solicitar un numero al usuario
//y mostrar su factorial.
function solicitarNumeroF() {
    let numeroFactorial = parseInt(prompt("Ingresa un numero para calcular su factorial"));

    if(!isNaN(numeroFactorial) && numeroFactorial >= 0) {
        let resultado = calcularFactorial(numeroFactorial);
        alert("El factorial de " + numeroFactorial + " es " + resultado);
    } else {
        alert("por favor, ingresa un numero entero no negativo")
    }
}

//Llamamos a la funcion para solicitar el numero y calcular el factorial.
solicitarNumeroF();



//Crea una función que convierta un valor en dólares, 
//pasado como parámetro, y devuelva el valor equivalente 
//en reales(moneda brasileña,si deseas puedes hacerlo con 
//el valor del dólar en tu país). Para esto, considera 
//la cotización del dólar igual a R$4,80.

//Funcion para convertir dolares a reales brasileños.
function convertirDolarReales(dolares) {
    //Uso una constante ya que ese valor sera fijo.
    const tasaDeCambio = 4.80;
    //return, me retornara el calculo de 
    //dolares por tasa de cambio
    return dolares * tasaDeCambio;
}

//Uso de la funcion.
let dolaresUsuario = parseFloat(prompt("Ingresa el valor en dolares para convertir a reales: "));

if(!isNaN(dolaresUsuario) && dolaresUsuario >= 0) {
    let reales = convertirDolarReales(dolaresUsuario);
    alert(dolaresUsuario + " dolares equivales a " + reales.toFixed(2) + " reales.");
} else {
    alert("Por favor, ingresa un valor numerico valido");
}
convertirDolarReales();
*/



//Crea una función que muestre en pantalla el 
//área y el perímetro de una sala rectangular, 
//utilizando la altura y la anchura que se proporcionarán 
//como parámetros.

//Funcion para calcular y mostrar el area
//y el perimetro de una sala rectangular.
function calcularAreayPerimetro() {

    //calcular area y perimetro.
    let area = altura * anchura;

    //Calcular el perimetro.
    let perimetro = 2 * (altura + anchura);

    alert("El area de la sala es: " + area.toFixed(2) + " unidades cuadradas.\n" + "El perimetro de la sala es: " + perimetro.toFixed(2) + " unidades.");

    //Solicitar la altura y anchura al usuario.
    let altura = parseFloat(prompt("Ingresa la altura de la sala: "));
    let anchura = parseFloat(prompt("Ingresa la anchura de la sala: "));

    if(!isNaN(altura) && altura > 0 && !isNaN(anchura) && anchura > 0) {
        calcularAreayPerimetro(altura, anchura);

    } else {
        alert("Por favor, ingresa valores numericos positivos validos.")
    }
}

calcularAreayPerimetro();



//Crea una función que muestre en pantalla 
//el área y el perímetro de una sala circular, 
//utilizando su radio que se proporcionará como 
//parámetro. Considera Pi = 3,14.

//Funcion para calcular y mostrar el area
//y el perimtero de una sala circular.
function calcularSalaCircular(radio) {
    //Definimos PI.
    const pi = 3.14;

    //Calculamos el area de la sala circular.
    let area = pi * radio * radio;
    //Calculamos el perimetro de la sala circular.
    let perimetro = 2 * pi * radio;

    alert("El area de la sala circular es: " + area.toFixed(2) + " unidades cuadradas.\n" +
    "El perimetro de la sala circular es: " + perimetro.toFixed(2) + " unidades.");
}

let radio = parseFloat(prompt("Ingresa el radio de la sala circular: "));
if(!isNaN(radio) && radio > 0) {
    calcularSalaCircular(radio);
} else {
    alert("Por favor, ingresa un valor numerico positivo valido para el radio-2");
}



//Crea una función que muestre en pantalla 
//la tabla de multiplicar de un número dado como parámetro.

// Función para mostrar la tabla de multiplicar de un número dado
function mostrarTablaMultiplicar(numero) {
    // Validar que el número sea un entero positivo
    if (Number.isInteger(numero) && numero > 0) {
        // Encabezado de la tabla
        console.log(`Tabla de multiplicar del ${numero}:`);

        // Iterar del 1 al 10 para mostrar los resultados
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            console.log(`${numero} x ${i} = ${resultado}`);
        }
    } else {
        console.log("Por favor, ingresa un número entero positivo válido.");
    }
}

// Ejemplo de uso de la función con el número 5
mostrarTablaMultiplicar(5);


//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
consolelog(listaGenerica);

//Crea una lista de lenguajes de programación 
//llamada "lenguagesDeProgramacion con los 
//siguientes elementos: 
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = [
    'JavaScript',
    'C',
    'C++',
    'Kotlin',
    'Python'
];
console.log(lenguajesDeProgramacion);

//Agrega a la lista 
//"lenguagesDeProgramacion 
//los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');


//Crea una función que muestre en 
//la consola todos los elementos de 
//la lista "lenguagesDeProgramacion.
function mostratLenguajesDeProgramacion() {
    console.log("Lista de lenguajes de programacion");
    lenguajesDeProgramacion.forEach(function(lenguaje) {
        console.log(lenguaje);
    });
}
mostratLenguajesDeProgramacion();


//Crea una función que muestre en la 
//consola todos los elementos de la lista 
//"lenguagesDeProgramacion en orden inverso.
function mostratEnOrdenInverso() {
    console.log("Lista de lenguajes de programacion en orden inverso: ");

    //Invertimos el orden del array.
    let reverseArray = lenguajesDeProgramacion.slice().reverse();

    //Mostramos los elementos invertidos usando forEach.
    reverseArray.forEach(function(lenguaje) {
        console.log(lenguaje);
    });
}
mostratEnOrdenInverso();


//Crea una función que calcule el promedio 
//de los elementos en una lista de números.
function calcularPromedio(numeros) {
    //Validar que el array no este vacio.
    if(numeros.length === 0) {
        return 0;//Retorna 0 si la lista esta vacia.
    }

    //Sumamos todos los elementos del array.
    let suma = 0;
    for(let i = 0; i < numeros.length; i++) {
        suma += (numeros[i]);
    }

    //Calculamos el promedio.
    let promedio = suma / numeros.length;
    return promedio;
}
//Eejecutamos.
let listaDeNumeros = [1, 2, 3, 4, 5];
let promedio = calcularPromedio(listaDeNumeros);
console.log("El promedio de los numeros en la lista es: " + promedio);


//Crea una función que muestre en la consola 
//el número más grande y el número más pequeño 
//en una lista.

//Funcion para encontrar y mostrar el numero
//mas grande y el mas pequeño de una lista.
function mostrarMayorYMenor(numeros) {
    //Validamos que el array no este vacio
    //y que todos los elementos sean numeros.
    if (numeros.length === 0 || numeros.some(isNaN)) {
        console.log("Por favor, proporciona una lista de numeros validos.");
        return;
    }

    //Encontrar el numero mas grande usando Math.max y
    //el operador de propagacion.
    let maximo = Math.max(...numeros);
    //Encontrar el mas pequeño.
    let minimo = Math.min(...numeros);

    //Mostrar los resultados en la consola:
    console.log(`El numero mas grande en la lista es: ${maximo}`);
    console.log(`El numero mas pequeño en la lista es: ${minimo}`);
}

let listaNumeros = [3, 7, 1, 9, 4, 2];
mostrarMayorYMenor(listaDeNumeros);


/*
Crea una función que devuelva la suma de 
/todos los elementos en una lista.
*/
function sumaNumeros(lista) {
    //Iniciando la suma en 0.
    let suma = 0;

    //Iteramos sobre cada elemento en la lista
    //y agregarlo a la suma.
    for (let i = 0; i < lista.length; i++) {
        suma+= lista[i];
    }

    //Devolvemos la suma total.
    return suma;
}

let listaDeNumero = [3, 7, 1, 9, 4, 2];
let sumaTotal = sumarElementos(listaDeNumero);
console.log(`La suma de los elementos en la lista es: ${sumaTotal}`);


//Crea una función que devuelva la posición en la 
//lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// Función para encontrar la posición de un elemento en una lista
function encontrarPosicion(lista, elemento) {
    // Iterar sobre la lista para encontrar la posición del elemento
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i; // Devolver la posición si se encuentra el elemento
        }
    }
    return -1; // Devolver -1 si el elemento no se encuentra en la lista
}

// Ejemplo de uso
let listaDeElementos = [3, 7, 1, 9, 4, 2];
let elementoBuscado = 9;
let posicionElemento = encontrarPosicion(listaDeElementos, elementoBuscado);
console.log("La posición del elemento en la lista es: " + posicionElemento);


//Crea una función que reciba dos listas de números del 
//mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// Función para sumar elementos de dos listas
function sumarListas(lista1, lista2) {
    // Verificar que las listas tengan la misma longitud
    if (lista1.length !== lista2.length) {
        console.log("Las listas deben tener la misma longitud.");
        return null; // Devolver null si las listas no tienen el mismo tamaño
    }

    let resultado = [];

    // Iterar sobre las listas y sumar los elementos correspondientes
    for (let i = 0; i < lista1.length; i++) {
        let suma = lista1[i] + lista2[i];
        resultado.push(suma); // Agregar la suma al resultado
    }

    return resultado;
}

// Ejemplo de uso
let lista1 = [1, 2, 3, 4, 5];
let lista2 = [6, 7, 8, 9, 10];
let resultadoSuma = sumarListas(lista1, lista2);
console.log("Lista resultante de la suma:", resultadoSuma);


//Crea una función que reciba una lista de números y 
//devuelva una nueva lista con el cuadrado de cada número.
// Función para calcular el cuadrado de cada número en una lista
function calcularCuadrados(lista) {
    let listaCuadrados = [];

    // Iterar sobre la lista y calcular el cuadrado de cada número
    for (let i = 0; i < lista.length; i++) {
        let cuadrado = lista[i] * lista[i];
        listaCuadrados.push(cuadrado); // Agregar el cuadrado a la lista de resultados
    }

    return listaCuadrados;
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5];
let cuadrados = calcularCuadrados(numeros);
console.log("Lista con los cuadrados de los números:", cuadrados);


//
