// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt( "dammi una parola" )

function palindroma( word ){

let parolaAlContrario = ``

for( let i = word.lenght - 1; i >= 0; i-- ){
    parolaAlContrario += word[i]
}

return parolaAlContrario

}

console.log( palindroma( parola ) )