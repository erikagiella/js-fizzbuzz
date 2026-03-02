//dichiarazione/inizializzazione variabili
const fizz = 'Fizz';
const buzz = 'Buzz';
const fizz_style = 'bg-primary';
const buzz_style = 'warning_bg';
const fizzbuzz_style = 'danger_bg fs-2 ';
const fizzbuzz_anim = 'fizzBuzz_anim fizzBuzz_text'
const default_style = 'success_bg';

let message = '';
let style = default_style;
let animation = '';
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
        message = (`${fizz}${buzz}!`);
        style = fizzbuzz_style;
        animation = fizzbuzz_anim;
    }
    //ALTRIMENTI SE i è divisibile per 3 
    else if (resto_3 === 0) {
        message = fizz;
        style = fizz_style;
        animation = '';
    }
    //ALTRIMENTI SE i è divisibile per 5
    else if (resto_5 === 0) {
        message = buzz;
        style = buzz_style;
        animation = '';
    }
    //ALTRIMENTI se non è divisibile nè per 3 nè per 5
    else {
        message = i;
        style = default_style;
        animation = '';
    }

    //stampo il risultato sia in console che sulla pagina
    console.log(message);
    output.innerHTML += `<div class="col-12 col-sm-6 col-md-3 col-lg-2 ">
                            <div class= "box ${style} bg-gradient text-white d-flex align-items-center justify-content-center" style="height: 50px" >
                                <div class="${animation}">
                                    ${message}
                                </div>
                            </div>
                        </div>`;


}

