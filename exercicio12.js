// Exercicio 12
const prompt = require("prompt-sync")();
let peso = Number(prompt("Digite o peso da mochila em kg: "));

if (peso < 3) {
    console.log("Leve");
} else if (peso <= 6) {
    console.log("Atencao");
} else {
    console.log("Muito pesada");
}
