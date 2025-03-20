/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(lato1, lato2) {
  return lato1 * lato2;
}
const areaRettangolo = area(6, 9);
console.log(areaRettangolo);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}
//console.log(crazySum(7, 7));
console.log(crazySum(6, 8));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
  if (num <= 19) {
    return num - 19;
  } else {
    return (num - 19) * 3;
  }
}
console.log(crazyDiff(Math.floor(Math.random() * 20)));
console.log(crazyDiff(Math.floor(Math.random() * 100)));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) return true;
}
console.log(boundary(20));
console.log(boundary(60));
console.log(boundary(100));
console.log(boundary(400));
console.log(boundary(500));
console.log(boundary(19));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
  if (stringa.startsWith("epicode")) {
    return stringa;
  } else {
    return "epicode" + stringa;
  }
}
console.log(epify("epicode"));
console.log(epify(" è un corso online"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(6));
console.log(check3and7(12));
console.log(check3and7(21));
console.log(check3and7(49));
console.log(check3and7(20));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
  stringa = stringa.split("").reverse("").join("");
  return stringa;
}
console.log(reverseString("epicode"));
console.log(reverseString("epicode"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa) {}
console.log(upperFirst("speriamo di riuscire a fare questo esercizio"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
  return stringa.slice(1, -1);
}
console.log(cutString("Alessandro"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
 */

const casualArray = [];
console.log(casualArray);

function giveMeRandom(n) {
  const casualArray = Math.floor(Math.random() * n);
  return casualArray;
}

console.log(giveMeRandom(11));
