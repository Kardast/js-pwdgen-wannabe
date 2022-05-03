// tipi di variabili

// const miaVariabile; 
    // const anno = 2022;
    // console.log(anno);

// let miaVariabile;
    // let somma = 2 + 4;
    // console.log(somma);
    // document.getElementById("somma_js").innerHTML=somma;

    // let sottr = somma - 3;
    // console.log(sottr);
    // document.getElementById("sottr_js").innerHTML=sottr;

    // let divisione = somma / sottr;
    // console.log(divisione);
    // document.getElementById("divisione_js").innerHTML=divisione;

    // let moltiplicazione = divisione * sottr;
    // console.log(moltiplicazione);
    // document.getElementById("moltiplicazione_js").innerHTML=moltiplicazione + " blabla";

// var miaVariabile;
    // legacy way

// alert
    // alert("siamo nell'anno " + anno);

    // template literal codice backticks alt+96
    // console.log(
    //     `siamo nell'anno ${anno}`
    // );

// prompt
const nome = prompt("Come ti chiami?");
console.log(nome);

const cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);

const colore = prompt("Qual è il tuo colore preferito?");
console.log(colore);

const numero = 21;

document.getElementById("unsafe_pws").innerHTML=nome + cognome + colore + numero;