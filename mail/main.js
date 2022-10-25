// genero il mio array di emails
const emailList = ["nicola@tim.it", "fabio@libero.it", "cesare@tiscali.it", "luca@videoonkine.it"];
console.log(emailList);

// seleziono il bottone submit
const btnSubmit=document.querySelector("button");

//al click del pulsante fai partire l'algoritmo
btnSubmit.addEventListener('click', function(){
    // chiedo all'utente di inserire la sua email
    const emailUser = document.getElementById("email").value;
    console.log("l'email inserita è " + emailUser);

    // confronto l'email inserita con quelle presenti nell'array
for (let i = 0; i < emailList.length; i++) {
    const element = emailList[i];
    console.log(element);
    if (element === emailUser) {
        alert("la tua e-mail è presente nel nostro database");
        break;
    } else {
        alert("la tua e-mail non è presente nel database");
        break;
    }
}
})




