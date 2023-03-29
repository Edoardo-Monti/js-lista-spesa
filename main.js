/*
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/ 

const array = [
    "pasta",
    "latte",
    "cibo per cane",
    "biscotti",
    "cereali",
    "verdura"
]

console.log(array)
//veriabile che indica la destinazione
let body = document.querySelector(`body`)
//da dove il mio ciclo for parte
let i = 0

while( i < array.length ){
    //creo la veriabile che sarà il mio contenitore nell' html
    let lista = document.createElement(`ul`)
    //creo i singoli elementi che saranno dentro a "lista"
    lista.innerHTML = `<li>${array[i]}</li>`
    //faccio apparire in pagina 
    body.append(lista)

    console.log(i)
    //di quanto si deve muovere il mio ciclo
    i++
}