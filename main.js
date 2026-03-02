//dichiarazione/inizializzazione variabili
const fizz = 'Fizz';
const buzz = 'Buzz';
const fizz_style = 'bg-primary ';
const buzz_style = 'bg-warning';
const fizzbuzz_style = 'bg-danger';
const default_style = 'bg-success';

let message = '';
let style = default_style;
let resto_3;
let resto_5;

const output = document.getElementById("output");




//ciclo for 1-100
for (let i = 1; i <= 100; i++) {

    //calcolo se ci sono resti per le divisioni di i per 3 e 5
    resto_3 = i % 3
    resto_5 = i % 5

    //SE i è divisibile per 3 e non per 5

    if (resto_3 === 0 && resto_5 === 0) {
        message = (`${fizz}${buzz}`);
        style = fizzbuzz_style;
    }
    //ALTRIMENTI SE i è divisibile per 3 
    else if (resto_3 === 0) {
        message = fizz;
        style = fizz_style;
    }
    //ALTRIMENTI SE i è divisibile per 5
    else if (resto_5 === 0) {
        message = buzz;
        style = buzz_style;
    }
    //ALTRIMENTI se non è divisibile nè per 3 nè per 5
    else {
        message = i;
        style = default_style;
    }

    //stampo il risultato sia in console che sulla pagina
    console.log(message);
    output.innerHTML += `<div class="col-12 col-sm-6 col-md-3 col-lg-2 ${style} bg-gradient text-white p-2 g-1 ">${message}</div>`;


}

