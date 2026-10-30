// Exercicio 43
const prompt = require("prompt-sync")();
let pontos = Number(prompt("Digite os pontos do campeonato: "));

if (pontos >= 100) {
    console.log("Ouro");
} else if (pontos >= 80) {
    console.log("Prata");
} else if (pontos >= 60) {
    console.log("Bronze");
} else {
    console.log("Participacao");
}
