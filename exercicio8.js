// Exercicio 8
const prompt = require("prompt-sync")();
let velocidade = Number(prompt("Digite a velocidade da bicicleta em km/h: "));

if (velocidade < 10) {
    console.log("Lento");
} else if (velocidade <= 20) {
    console.log("Moderado");
} else {
    console.log("Rapido");
}
