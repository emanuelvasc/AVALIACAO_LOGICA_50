// Exercicio 16
const prompt = require("prompt-sync")();
let pecas = Number(prompt("Digite a quantidade de pecas produzidas: "));

if (pecas < 10) {
    console.log("Abaixo da meta");
} else if (pecas < 20) {
    console.log("Meta parcial");
} else if (pecas < 30) {
    console.log("Meta atingida");
} else {
    console.log("Meta superada");
}
