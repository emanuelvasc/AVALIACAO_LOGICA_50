// Exercicio 14
const prompt = require("prompt-sync")();
let umidade = Number(prompt("Digite a umidade em porcentagem: "));

if (umidade < 30) {
    console.log("Muito seco");
} else if (umidade < 60) {
    console.log("Adequado");
} else if (umidade <= 80) {
    console.log("Umido");
} else {
    console.log("Muito umido");
}
