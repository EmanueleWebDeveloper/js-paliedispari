// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let sceltaUtente = prompt("Scegli pari o dispari").toLowerCase();

let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

let numeroRandom = randomica(5);

let somma = numeroUtente + numeroRandom;

let risultato = isPari(somma);

console.log(`Numero Utente: ${numeroUtente}`);
console.log(`Numero Random: ${numeroRandom}`);
console.log(`Somma: ${somma}`);
console.log(`Risultato: ${risultato ? 'pari' : 'dispari'}`);

if (sceltaUtente === "pari" && risultato || sceltaUtente === "dispari" && !risultato) {
    console.log(`Hai vinto! La somma è ${risultato ? 'pari' : 'dispari'}.`);
} else {
    console.log(`Hai perso! La somma è ${risultato ? 'pari' : 'dispari'}.`);
}

function randomica(max) {
    return Math.floor(Math.random() * max) + 1;
}

function isPari(numero) {
    return numero % 2 === 0;
}