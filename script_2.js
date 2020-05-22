// Exercice 2: Opérations & Boucles
// Exercice 2.1: Calcul rapide
function getFactorialValue(){
    return document.getElementById("inputFactorial").value;
}

function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}

function script2_showFactorial() {
    value = getFactorialValue();
    console.log("calcul de factoriel:" + factorialize(value));
}