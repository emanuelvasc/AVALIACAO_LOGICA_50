// Exercicio 22
const prompt = require("prompt-sync")();
let producao = Number(prompt("Digite a producao em kWh: "));

if (producao < 0) {
    console.log("Valor invalido");
} else if (producao < 10) {
    console.log("Baixa");
} else if (producao < 30) {
    console.log("Media");
} else {
    console.log("Alta");
}
