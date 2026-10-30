// Exercicio 28
const prompt = require("prompt-sync")();
let pontuacao = Number(prompt("Digite a pontuacao da gincana: "));

if (pontuacao < 0) {
    console.log("Valor invalido");
} else if (pontuacao < 25) {
    console.log("Iniciante");
} else if (pontuacao < 50) {
    console.log("Intermediario");
} else if (pontuacao < 75) {
    console.log("Avancado");
} else {
    console.log("Especialista");
}
