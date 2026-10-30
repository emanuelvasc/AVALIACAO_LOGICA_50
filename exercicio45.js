// Exercicio 45
const prompt = require("prompt-sync")();
let peso = Number(prompt("Digite o peso da mochila em kg: "));

if (peso <= 2) {
    console.log("Leve");
} else if (peso <= 5) {
    console.log("Atencao");
} else {
    console.log("Pesada");
}
