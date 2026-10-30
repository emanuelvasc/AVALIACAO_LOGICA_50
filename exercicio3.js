// Exercicio 3
const prompt = require("prompt-sync")();
let pontos = Number(prompt("Digite os pontos do participante: "));

if (pontos >= 90) {
    console.log("Ouro");
} else if (pontos >= 70) {
    console.log("Prata");
} else if (pontos >= 50) {
    console.log("Bronze");
} else {
    console.log("Participacao");
}
