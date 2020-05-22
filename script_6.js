// Exercice 6
// Exercice 6.1: code la vie

// CCG UCG UUG CGC UAC AGC
// => Proline Sérine Leucine Arginine Tyrosine Sérine
// CCU CGC CGG UAC UUC UCG
// => Proline Arginine Arginine Tyrosine Phénylalanine Sérine

const DNA1 = "CCGUCGUUGCGCUACAGC"
const DNA2 = "CCUCGCCGGUACUUCUCG"

function convertDNACode(value){
    splitedCode = value.match(/.{3}/g);
    splitedCode.forEach(element => {
        getProteine(element);
    });
}

function getProteine(value){
    switch (value) {
        // Serine
        case "UCU":
            console.log("Sérine");
            break;
        case "UCC":
            console.log("Sérine");
            break;
        case "UCA":
            console.log("Sérine");
            break;
        case "UCG":
            console.log("Sérine");
            break;
        case "AGU":
            console.log("Sérine");
            break;
        case "AGC":
            console.log("Sérine");
            break;

        // Arginine
        case "CGU":
            console.log("Arginine");
            break;
        case "CGC":
            console.log("Arginine");
            break;
        case "CGA":
            console.log("Arginine");
            break;
        case "CGG":
            console.log("Arginine");
            break;
        case "AGA":
            console.log("Arginine");
            break;
        case "AGG":
            console.log("Arginine");
            break;

        // Proline:
        case "CCU":
            console.log("Proline");
            break;
        case "CCC":
            console.log("Proline");
            break;
        case "CCA":
            console.log("Proline");
            break;
        case "CCG":
            console.log("Proline");
            break;

        // Leucine:
        case "UUA":
            console.log("Leucine");
            break;
        case "UUG":
            console.log("Leucine");
            break;

        // Phénylalanine:
        case "UUU":
            console.log("Phénylalanine");
            break;
        case "UUC":
            console.log("Phénylalanine");
            break;
        
        // Tyrosine:
        case "UAU":
            console.log("Tyrosine");
            break;
        case "UAC":
            console.log("Tyrosine");
            break;
        
        // not recognized value:
        default:
            console.log("Cette entrée n'est pas reconnue");
            break;
    }
}

function script6_showMeLife(){
    console.log('Result for DNA Code 1:');
    console.log(DNA1);
    convertDNACode(DNA1);
    console.log('Result for DNA Code 2:');
    console.log(DNA2);
    convertDNACode(DNA2);
}




// CCU => Proline
// CCC => Proline
// CCA => Proline
// CCG => Proline
// ^CC => Proline

// // Arginine:
// AGA => Arginine
// AGG => Arginine
// AG(A|G) => Arginine
// CGU => Arginine
// CGC => Arginine
// CGA => Arginine
// CGG => Arginine
// ^CG => Arginine

// // Sérine:
// AGU => Sérine
// AGC => Sérine
// AG(U|C) => Sérine
// UCU => Sérine
// UCC => Sérine
// UCA => Sérine
// UCG => Sérine
// ^UC => Sérine

// UUA => Leucine
// UUG => Leucine
// UU(A|G) => Leucine

// UUU=> Phénylalanine
// UUC => Phénylalanine
// UU(U|C) => Phénylalanine


// new RegExp(/^UA/)