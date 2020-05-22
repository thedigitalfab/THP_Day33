// Exercice 3: Analyse de données
// Exercice 3.2: Bibliothequaire

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Helper: Sort by Renting
function sortByRenting(){
    return books.slice().sort((a,b) => a.rented - b.rented);
    
}

// Est-ce que tous les livres ont été au moins empruntés une fois ?
function script5_isAllRented(){
    (books.filter(element => element.rented == 0 ).length == 0) ? console.log('true') : console.log('false');
}

// Quel est livre le plus emprunté ?
function script5_getMostRented(){
    console.log(sortByRenting().slice(-1).pop());
}

// Quel est le livre le moins emprunté ?
function script5_getLessRented(){
    console.log(sortByRenting().slice(0).shift());
}

// Trouve le livre avec l'ID: 873495
function script5_findID(){
    console.log('with filter method:');
    console.log(books.filter((element) => (element.id == 873495))[0]);
    console.log('with find method:');
    console.log(books.find(element => (element.id == 873495)));
}

// Supprime le livre avec l'ID: 133712
function script5_deleteID(){
    delete books[books.findIndex(element => (element.id == 133712))];
}

// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
function compareByTitle(a, b) {
    // Use toUpperCase() to ignore character casing
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
  
    let comparison = 0;
    if (titleA > titleB) {
      comparison = 1;
    } else if (titleA < titleB) {
      comparison = -1;
    }
    return comparison;
}

function script5_sortList(){
    console.log(books.sort(compareByTitle));
}