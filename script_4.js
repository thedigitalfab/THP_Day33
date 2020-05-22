// Exercice 3: Analyse de données
// Exercice 3.1: Startup Nation

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
function script4_isBornBeforeDate(){
    console.log('by filter approach:')
    const filteredList = entrepreneurs.filter(element => (element.year > 1969 && element.year < 1980));
    console.log(filteredList);

    console.log('by create approach:')
    const createdList = [];
    entrepreneurs.forEach((element) => {
        if(element.year > 1969 && element.year < 1980){
            let obj = {
                first: element.first,
                last: element.last,
                year: element.year
            };
            createdList.push(obj);
        }
    });
    console.log(createdList);
}
// Sors une array qui contient le prénom et le nom des entrepreneurs ;
function script4_getName(){
    console.log('by delete approach:')
    const deletedList = entrepreneurs.slice();
    deletedList.forEach((element) => {
        delete element.year;
    });
    console.log(deletedList);

    console.log('by create approach:')
    var createdList = [];
    entrepreneurs.forEach((element) => {
        let obj = {
            first: element.first,
            last: element.last
        };
        createdList.push(obj);
    });
    console.log(createdList);
}
// Quel âge aurait chaque inventeur aujourd'hui ?
function script4_getAgeToDate(){
    const list = entrepreneurs.slice();
    nowYear = new Date().getFullYear();
    list.forEach((element) =>{
        console.log(nowYear - element.year);
    });
}
// Trie les entrepreneurs par ordre alphabétique du nom de famille.
function compareByName(a, b) {
    // Use toUpperCase() to ignore character casing
    const lastA = a.last.toUpperCase();
    const lastB = b.last.toUpperCase();
  
    let comparison = 0;
    if (lastA > lastB) {
      comparison = 1;
    } else if (lastA < lastB) {
      comparison = -1;
    }
    return comparison;
}

function script4_sortAlphabetical(){
    const list = entrepreneurs.slice();
    list.sort(compareByName);
    console.log(list);
}