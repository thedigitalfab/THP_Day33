// Exercice 2: Opérations & Boucles
// Exercice 2.2: Pyramide de Mario
function getPyramidValue(){
    return document.getElementById("inputPyramid").value;
}

function buildPyramid(num){
    for(let count = 0; count < num; count++){
        let my_floor = " ".repeat(num - 1 - count) + "#".repeat(count + 1);
        console.log(my_floor);
    }
}

function script3_showPyramid() {
    value = getPyramidValue();
    buildPyramid(value);
}