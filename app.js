
let intentos;
let numeroSecreto;
let listaNumerosSorteados= [];
let numeroMaximo=5;
condicionesIniciales();


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','¡El número secreto es menor!');
            } else{
                asignarTextoElemento('p', '¡El número secreto es mayor!');
    }
    intentos++;
    limpiarCaja();
    return;
}

function asignarTextoElemento( element, text){
    let container = document.querySelector(element);
    container.innerHTML = text;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //resuelvo la recursividad

    if(listaNumerosSorteados.length===numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');

    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }



}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);  
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}