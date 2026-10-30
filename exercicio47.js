// Exercicio 47
const prompt = require("prompt-sync")();
let horas = Number(prompt("Digite o tempo de estacionamento em horas: "));

if (horas <= 0) {
    console.log("Invalido");
} else if (horas <= 2) {
    console.log("R$ 8");
} else if (horas <= 4) {
    console.log("R$ 14");
} else {
    console.log("R$ 25");
}
