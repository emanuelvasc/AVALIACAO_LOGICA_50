// Exercicio 46
const prompt = require("prompt-sync")();
let pontuacao = Number(prompt("Digite a pontuacao da gincana: "));

if (pontuacao < 20) {
    console.log("Iniciante");
} else if (pontuacao < 50) {
    console.log("Intermediario");
} else if (pontuacao < 80) {
    console.log("Avancado");
} else {
    console.log("Especialista");
}
