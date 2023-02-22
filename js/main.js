let km = parseInt(prompt('Quanti km è lungo il percorso?'));
let anni = parseInt(prompt('Quanti anni hai?'));
let prezzo = 0.21
let somma = km * prezzo

if(anni < 18 ){
    let sconto = somma * 20 / 100
    somma= somma - sconto
    
    
} else if (anni >= 66 ) {
    let sconto = somma * 40 / 100
    somma= somma - sconto
   

}else{
    console.log(somma)
}

document.getElementById("totale").innerHTML="Il totale del prezzo del biglietto è: " + somma;










