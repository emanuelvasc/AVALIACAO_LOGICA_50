// Exercicio 6
const prompt = require("prompt-sync")();
let ruido = Number(prompt("Digite os decibeis: "));

if (ruido < 40) {
    console.log("Silencioso");
} else if (ruido <= 70) {
    console.log("Moderado");
} else {
    console.log("Barulhento");
}
