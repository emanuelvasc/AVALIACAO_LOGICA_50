// Exercicio 5
const prompt = require("prompt-sync")();
let consumo = Number(prompt("Digite o consumo de agua em litros: "));

if (consumo < 50) {
    console.log("Baixo");
} else if (consumo <= 100) {
    console.log("Moderado");
} else {
    console.log("Alto");
}
