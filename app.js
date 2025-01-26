//let titulo = document.querySelector('h1');
//titulo.textContent = 'Juego del número secreto';

//let parrafo = document.querySelector('.texto__parrafo');
//parrafo.textContent = 'Indica un número entre 1 y 10';

let numeroAleatorio = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('input1').value);
    //console.log(typeof numeroUsuario);
    //console.log(numeroUsuario);
    //console.log(numeroAleatorio);
    //console.log(intentos);
    if(numeroUsuario === numeroAleatorio){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario > numeroAleatorio){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarInput();
    }
    return;
}

function limpiarInput(){
   return document.querySelector('#input1').value = '';
}

function generarNumeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Todos los números posibles han sido sorteados');
    }else{
        //Si el numero secreto y existe en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
    numeroAleatorio = generarNumeroAleatorio();
    intentos = 1;
}

function reiniciarJuego(){
//Limpiar la caja de texto
   limpiarInput();
//Indicar mensajes iniciales
//Reiniciar numero aleatorio
//Reiniciar intentos
   condicionesIniciales();
//Desabilitar botón de reinicio
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();