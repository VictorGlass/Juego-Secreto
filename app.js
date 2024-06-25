
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


// elemento es el elemento html, y texto es lo que se mostrara.
//se convierten en variables.
function asignarTextoElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    //con parseInt forzamos el string a convertirse en un number, como debe ser
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    
    if (numeroUsuario === numeroSecreto) {
        //Aqui se llama una funcion y se utiliza el elemento que 
        //en este caso es el parrafo y se le pasa un texto a mostrar.
        //Utilizamos las comillas invertidas en el template string
        //ademas de los operadores ternarios.
        asignarTextoElementos('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}` );
        //Para reiniciar el boton de nuevo juego.
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acerto.
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElementos('p', 'El numero secreto es menor');
        } else {
            asignarTextoElementos('p', 'El numero secreto es mayor');
        }
        intentos++;
        //lo colocamos aca cuando el usuario no acierta.
        limpiarCaja();
    }
    return;
}

//Codigo
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    //El valor de la caja lo expresamos con dos comillas vacias.
    valorCaja.value = '';
}

//Generamos una funcion que genere un numero
//secreto de forma aleatoria.
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteanmos todos los numeros.
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElementos('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero generado esta incluido en la lista hacemos una operacion
        //si no hacemos otra.
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }    
    }
}

function condicionesInciales() {
    //Aca en la llamada a la funcion, dentro de los
    //parentesis, colocamos el elemento osea el h1 en este
    //caso y el texto a mostrar.
    asignarTextoElementos('h1', 'Juego del numero secreto');
    asignarTextoElementos('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //1. limpiar caja
    limpiarCaja();
    //2. indicar mensaje de intervalo de numeros.
    condicionesInciales();
    //3. generar numero aleatorio.
    //4. inicializar el numero de intentos.
    condicionesInciales();
    //5. deshabilitar el boton de juego nuevo
    
    //en esta parte selecionamos el id del boton nuevo juego
    //y con set.attributed, activamos el disables y con valor true.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesInciales();
