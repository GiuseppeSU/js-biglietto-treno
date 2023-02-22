let km = parseInt(prompt('Quanti km è lungo il percorso?'));
let anni = parseInt(prompt('Quanti anni hai?'));
let prezzo = 0.21
let somma = km * prezzo

if(anni < 18 ){
    let sconto = somma * 20 / 100
    somma= somma - sconto
    somma = somma.toFixed();
    document.getElementById("sconto1").innerHTML="Sconto ragazzi under 18 : " + somma;

    
    
} else if (anni >= 66 ) {
    let sconto = somma * 40 / 100
    somma= somma - sconto
    somma = somma.toFixed();
    document.getElementById("sconto1").innerHTML="Sconto over 65 : " + somma;
   

}else{
    console.log(somma)
    somma = somma.toFixed();
}

document.getElementById("totale").innerHTML="Il totale del prezzo del biglietto è: " + somma;










