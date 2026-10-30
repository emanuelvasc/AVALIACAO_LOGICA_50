// Exercicio 2
const prompt = require("prompt-sync")();
let altura = Number(prompt("Digite a altura em centimetros: "));

if (altura < 100) {
    console.log("Nao permitido");
} else if (altura < 140) {
    console.log("Acompanhado");
} else {
    console.log("Liberado");
}
