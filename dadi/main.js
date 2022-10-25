const userDice = Math.floor(Math.random() * 6 + 1);
console.log("dado utente " + userDice);

const userCpu = Math.floor(Math.random() * 6 + 1);
console.log("dado cpu " + userCpu);

if ( userDice > userCpu ) {
    alert("Ha vinto l'utente");
} else {
    alert("Ha vinto la Cpu");
}