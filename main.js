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
- creo due variabili Fizz e Buzz
- creo due variabili "resto_3" e "resto_5"
- creo un ciclo for che incrementi la variabile i da 1 a 100 (incluso)
- nelle due variabili "resto_3" e "resto_5" calcolo il resto della divisione di i per 3 e per 5
- sommo in un'altra variabile i due resti: se il numero è divisibile sia per 3 che per 5 questa variabile conterrà uno 0
- utilizzo un if/else if per verificare in quale delle varie casistiche rientro e stampo 
*/


