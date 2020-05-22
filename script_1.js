// Exercice 1: Afficher un message sur la console
function script1_showMessage(){
    console.log("Bonjour Monde");
}

function script1_showNamedMessage(){
    name = getNameValue();
    console.log("Bonjour," + " " + name + "!");
}

function getNameValue(){
    return document.getElementById("myName").value;
}