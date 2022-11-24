let nome = prompt('inserisci il tuo nome');
let cognome = prompt('inserisci il tuo cognome');
let colore = prompt('inserisci il tuo colore preferito');
let numero = 21;
let somma = nome + cognome + colore + numero;

document.getElementById('psw').innerHTML = `la tua psw è ${somma}`;
console.log(`la tua psw è ${somma}`)