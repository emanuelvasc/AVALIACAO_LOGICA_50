// Exercicio 11
const prompt = require("prompt-sync")();
let qualidade = Number(prompt("Digite o indice de qualidade do ar: "));

if (qualidade <= 50) {
    console.log("Bom");
} else if (qualidade <= 100) {
    console.log("Regular");
} else if (qualidade <= 150) {
    console.log("Ruim");
} else {
    console.log("Muito ruim");
}
