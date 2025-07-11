// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


/* Tools:
- const
- for loop
- console.log
- operatore % 

Preparazione:
- creo due costanti Fizz e Buzz
- creo variabili "resto_3" "resto_5" "message"
- creo un ciclo for che incrementi la variabile i da 1 a 100 (incluso)
    - nelle due variabili "resto_3" e "resto_5" calcolo il resto della divisione di i per 3 e per 5
    - utilizzo un if/else if per verificare in quale delle varie casistiche rientro
    - stampo messaggio a seconda della casistica
*/


//Elaborazione

//dichiarazione/inizializzazione variabili
const fizz = 'Fizz'
const buzz = 'Buzz'
let message = ''
let resto_3
let resto_5


//ciclo for 1-100
for (let i = 1; i <= 100; i++) {

    //calcolo se ci sono resti per le divisioni di i per 3 e 5
    resto_3 = i % 3
    resto_5 = i % 5

    //SE i è divisibile per 3 e non per 5
    if (resto_3 === 0 && resto_5 != 0) {
        message = fizz
    }
    //ALTRIMENTI SE i è divisibile per 5 e non per 3
    else if (resto_3 != 0 && resto_5 === 0) {
        message = buzz
    }
    //ALTRIMENTI SE i è divisibile per 3 e per 5
    else if (resto_3 === 0 && resto_5 === 0) {
        message = `${fizz}${buzz}`
    }
    //ALTRIMENTI se non è divisibile nè per 3 nè per 5
    else {
        message = i
    }

    //stampo il risultato sia in console che sulla pagina
    console.log(message)
    document.writeln(message)
}

