// Exercicio 18
const prompt = require("prompt-sync")();
let nota = Number(prompt("Digite uma nota de 0 a 10: "));

if (nota < 0 || nota > 10) {
    console.log("Nota invalida");
} else if (nota < 5) {
    console.log("Insatisfatorio");
} else if (nota < 8) {
    console.log("Bom");
} else {
    console.log("Excelente");
}
