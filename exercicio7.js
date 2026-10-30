// Exercicio 7
const prompt = require("prompt-sync")();
let peso = Number(prompt("Digite o peso da encomenda em kg: "));

if (peso <= 1) {
    console.log("Leve");
} else if (peso <= 5) {
    console.log("Medio");
} else {
    console.log("Pesado");
}
