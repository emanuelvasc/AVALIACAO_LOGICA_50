// Exercicio 30
const prompt = require("prompt-sync")();
let camisetas = Number(prompt("Digite a quantidade de camisetas produzidas: "));

if (camisetas < 0) {
    console.log("Valor invalido");
} else if (camisetas < 20) {
    console.log("Inicio");
} else if (camisetas < 50) {
    console.log("Em andamento");
} else if (camisetas < 100) {
    console.log("Quase la");
} else {
    console.log("Meta concluida");
}
