// Exercice 6
// Exercice 6.1: Acne-Bot

// Les règles de conversations du bot sont les suivantes (rangées par priorité - si deux règles sont vraies, seule la plus haute dans la liste s'applique) :

// Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
// Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
// Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
// Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
// Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;

function getText(){
    return document.getElementById("botText").value;
}

function script7_getAcneBotAnswer(){
    answer = getText();
    if (answer.endsWith("?")){
        console.log("Ouais ouais...")
    } else if (answer === "") {
        console.log("t'es en PLS ?")
    }else if (answer === answer.toUpperCase()){
        console.log("Pwa, calme toi...")
    } else if (answer.toLowerCase().includes("fortnite")) {
        console.log("On s'fait une partie soum soum")
    } else {
        console.log("balek.")
    }
}

