// Exercicio 4
const prompt = require("prompt-sync")();
let atraso = Number(prompt("Digite os minutos de atraso: "));

if (atraso <= 0) {
    console.log("No prazo");
} else if (atraso <= 15) {
    console.log("Atraso pequeno");
} else if (atraso <= 40) {
    console.log("Atraso moderado");
} else {
    console.log("Atraso grande");
}
