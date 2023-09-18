// ARROW FUNCTION 

// function somma (num1, num2) {
//     return num1 + num2
// }
// console.log(somma (5, 10))


// -------------------------------------------------------------------------------

// let somma =(num1, num2)=> num1 + num2 

// console.log(somma (10, 30));

// ---------------------------------------------------------------------------------


// SPREAD OPERATOR 

// let array =[1, 2, 6, 8, 20]

// let max = Math.max(...array)

// console.log(max);

// -------------------------------------------------------------------------------------------

// METODI DI ORDINE SUPERIORE DEGLI ARRAY 
// Sono detti metodi di ordine superiore tutte quelle funzioni che accettano come paramentro altre funzioni.

// .reduce()
// Prende tutti i valori dell'array li trasforma e ce ne restituisce uno solo. 

// let array = [1, 2, 4, 6, 8]
//  let somma = array.reduce((acc, num)=> acc + num )

//  console.log(somma);

// ------------------------------------------------------------------------------------

// .filter()
// Crea un nuovo array inserendo i valori dell'array originale che corrispondono ai requisiti.

// let array = [1, 2, 3, 4, 5, 6, 7]

// let array2 = array.filter( (numero)=> numero % 2 === 0)

// console.log(array2);

// -----------------------------------------------------------------------------------------
//  .forEach()

// let array = [1, 2, 3, 4, 5, 6, 7]
//  for (let i = 0; i < array.length; i++) {
    //     console.log(array[i]) ;
    
    //  }
    
    // secondo metodo per stampare con l'arrow function =>
    // array.forEach((numero)=> console.log(numero))
    
    // -----------------------------------------------------------------------------------------
    
    // OGGETTI 
    
    // sono una collezione di coppie CHIAVE VALORE : dove la chiave può essere solo una stringa o un Symbol mentre il valore può essere qualsiasi altro tipo di dato anche delle funzioni. 
//quando il valore di un oggetto è diverso daun tipo di funzione, viene chiamata proprietà, quando invece il valore di un oggetto è una funzione viene detto metodo


// let oggetto = {}


// let smartphone ={
    //     "marca": "Samsung", 
    //     "modello": "S22",
    //     "prezzo": 999,
    //     "disponibilità": true,
    //     "contatti": ["Fabrizio", "andrea",]
    // }
    // console.log(smartphone);

    // ---------------------------------------------------------------------------------
    
    
// ESERCIZIO 1 JS  METODI DI ORDINE SUPERIORE DEGLI ARRAY  12/09/2023  

// ORDINE DECRESCENTE

// let array = [ 3, 7, -2, 5, 8, 1, 2, 5, 6, -4 ]

// array.sort((a,b)=> b - a)

// // ORDINE CRESCENTE

// let array2 = array.map((number)=> number)

// array2.reverse()

// console.log(array);
// console.log(array2);

// -----------------------------------------------------------

// ESERCIZIO 2 

// let arrayX = ["ciao", "luca", "giovanni"]
 
// console.log(arrayX.includes(1));
// ---------------------------------------------------------------------

// ESERCIZIO 3
// function numericasuali(n) {
//     let array= []
    
// for (let i = 0; i < n ; i++) {
//     array.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
    
// }
// return array;
// }
// console.log(numericasuali(10));  ;
// -------------------------------------------------------------------------------------------------

// ESERCIZIO 4 

// Scrivere un programma che permetta di ottenere un nuovo array che abbia come valori i numeri del primo array sommati con i valori del secondo array:

// let numbers1 = [10, 20, 30];
// let numbers2 = [40, 50, 60];

// let newArrey = []

//  for (let i = 0; i < numbers1.length ; i++) {
//     newArrey.push (numbers1[i] + numbers2[i]);
// }
// console.log(newArrey);

// -------------------------------------------------------------------------------------------

// ESERCIZIO 5 
// Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri contenuti nell'array.

// let array = [1, 5 ,7 ,12];

//  let somma = array.reduce((acc, num)=> acc + num )

// console.log(somma);














