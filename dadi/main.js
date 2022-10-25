const btnStart = document.getElementById("start");

btnStart.addEventListener('click', function(){ 
 
    // Inizializzo i numeri randomici
    const userDice = Math.floor(Math.random() * 6 + 1);
    console.log("dado utente " + userDice);

    const cpuDice = Math.floor(Math.random() * 6 + 1);
    console.log("dado cpu " + cpuDice);

    // trascrivo il risultato dell'estrazione sulla tabella
    document.getElementById("userNumber").innerHTML = userDice; 

    // uso l'immagine del dado estratto dall'utente con il relativo valore estratto
    if (userDice === 1){
        document.getElementById("userimg").src="img/1.jpg"   
    } else if (userDice === 2) {
        document.getElementById("userimg").src="img/2.webp"      
    } else if (userDice === 3) {
        document.getElementById("userimg").src="img/3.webp"      
    }else if (userDice === 4) {
        document.getElementById("userimg").src="img/4.webp"      
    }else if (userDice === 5) {
        document.getElementById("userimg").src="img/5.jpg"      
    }else if (userDice === 6) {
        document.getElementById("userimg").src="img/6.jpg"      
    }

    // trascrivo il risultato dell'estrazione sulla tabella
    document.getElementById("userCpu").innerHTML = cpuDice; 

    // uso l'immagine del dado estratto dalla cpu con il relativo valore estratto
    if (cpuDice === 1){
        document.getElementById("cpuimg").src="img/1.jpg"      
    } else if (cpuDice === 2) {
        document.getElementById("cpuimg").src="img/2.webp"      
    } else if (cpuDice === 3) {
        document.getElementById("cpuimg").src="img/3.webp"      
    }else if (cpuDice === 4) {
        document.getElementById("cpuimg").src="img/4.webp"      
    }else if (cpuDice === 5) {
        document.getElementById("cpuimg").src="img/5.jpg"      
    }else if (cpuDice === 6) {
        document.getElementById("cpuimg").src="img/6.jpg"      
    }    


    if ( userDice > cpuDice ) {
        document.getElementById("userWin").innerHTML = "HAI PIU' FORTUNA DI UNA MACCHINA! COMPLIMENTI!"
    } else if ( userDice < cpuDice) {
        document.getElementById("userWin").innerHTML = "UNA CPU HA PIU' FORTUNA DI TE, MI DISPIACE!"
    } else {
        document.getElementById("userWin").innerHTML = "PARI! RITENTA!"
    }
});

