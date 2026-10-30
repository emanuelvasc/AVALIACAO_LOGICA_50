// Exercicio 13
const prompt = require("prompt-sync")();
let espera = Number(prompt("Digite o tempo de espera em minutos: "));

if (espera <= 5) {
    console.log("Rapido");
} else if (espera <= 15) {
    console.log("Normal");
} else if (espera <= 30) {
    console.log("Demorado");
} else {
    console.log("Muito demorado");
}
