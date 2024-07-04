let num1 = prompt("Inserisci il primo numero:");
let num2 = prompt("Inserisci il secondo numero:");

let somma = Number(num1) + Number(num2);
let sottrazione = num1 - num2;
let moltiplicazione = num1 * num2;
let divisione = num1 / num2;1
let potenza = num1 ** num2;

console.log(`Con i numeri da te scelti (${num1} e ${num2}), i risultati delle varie operazioni sono:\nsomma= ${somma},\nsottrazione= ${sottrazione},\nmoltiplicazione= ${moltiplicazione},\ndivisione= ${divisione},\ne ${num1} elevato alla potenza di ${num2}= ${potenza}.`);
