// putter spørsmålene i en liste som etterpå skal hentes ut gjennom indeksene 
const Questions = [{
    id: 0,
    q: "Hva blir den deriverte av sin(x)?",
    a: [{ text: "aner ikke?", isCorrect: false },
        { text: "-cos(x)", isCorrect: false },
        { text: "cos(x)", isCorrect: true },
        { text: "1/(sin(x))", isCorrect: false }
    ]

},
{
    id: 1,
    q: "hvordan finner man volum av et omdreingslegme til f(x),0,1?",
    a: [{ text: "(pi*integral(f,0,1))^2", isCorrect: false, isSelected: false },
        { text: "integral(f^2,0,1)", isCorrect: false },
        { text: "pi*integral(f,0,1)", isCorrect: false },
        { text: "pi*integral(f^2,0,1)", isCorrect: true }
    ]

},
{
    id: 2,
    q: "hva er (7*pi)/6 i grader?",
    a: [{ text: "70", isCorrect: false },
        { text: "45", isCorrect: false },
        { text: "210", isCorrect: true },
        { text: "200", isCorrect: false }
    ]

}

]

// starter 
var start = true;

// Iterate
function iterate(id) {

// viser resultatet 
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// henter spørsmålene
const question = document.getElementById("question");


// setter spørsmålteksten
question.innerText = Questions[id].q;

// får svaralternativene
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// bistår med index for å kunne skrive tekst 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// bistår med index for riktig eller feil svar 
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// viser svaralternativ for spørsmål 1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// viser svaralternativ for spørsmål 2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// viser svaralternativ for spørsmål 3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// viser svaralternativ for spørsmål 4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// lager en variabel for skjekksvar 
const evaluate = document.getElementsByClassName("evaluate");

// skjekker om svaret gitt er sant eller usant, og gir tilbakemelding 
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Korekt";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "Feil";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// neste spørmålknapp, går til neste spørsmål
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})