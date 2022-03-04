let listaNumeriRandom = document.querySelector('.numeri_random');
let numeroRandom;
let listaNumeriScelti = document.querySelector('.output_numeri_scelti');
let arrayNumeriRandom = [];
let numUtente = document.getElementById('numeri_utente');

const buttonAddNumber = document.getElementById('add_number');
const verificaBtn = document.querySelector('#verifica')
console.log(arrayNumeriRandom)

function getNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (arrayNumeriRandom.length < 6) {
    numeroRandom = getNumeroRandom
    while (arrayNumeriRandom.includes(numeroRandom)) {
        numeroRandom = Math.floor(Math.random() * 100) + 1;
    }
    arrayNumeriRandom.push(numeroRandom);
}

for (let index = 1; index < arrayNumeriRandom.length; index++) {
    listaNumeriRandom.innerHTML += ` ${arrayNumeriRandom[index]}`
    
}

buttonAddNumber.addEventListener('click', addNumber);

function addNumber(){
    listaNumeriScelti.innerHTML += ` ${numUtente.value}`
    numUtente.value = '';
}

verificaBtn.addEventListener('click', verificaListe);

function verificaListe(){
    if (listaNumeriRandom.innerHTML == listaNumeriScelti.innerHTML){
        alert('hai vinto')
    } else {
        alert('hai perso')
    }
} 

setTimeout(noneDisplay, 10000);

setTimeout(blockDisplay, 10000);


function noneDisplay(){
    listaNumeriRandom.style.visibility = 'hidden';
}

function blockDisplay(){
    numUtente.style.visibility = 'visible'
}
