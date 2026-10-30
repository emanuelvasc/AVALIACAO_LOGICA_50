// Exercicio 42
const prompt = require("prompt-sync")();
let altura = Number(prompt("Digite a altura em centimetros: "));

if (altura < 110) {
    console.log("Nao permitido");
} else if (altura < 150) {
    console.log("Acompanhado");
} else {
    console.log("Liberado");
}
