// Exercicio 10
const prompt = require("prompt-sync")();
let visitantes = Number(prompt("Digite a quantidade de visitantes: "));

if (visitantes < 20) {
    console.log("Baixo");
} else if (visitantes < 60) {
    console.log("Medio");
} else {
    console.log("Alto");
}
