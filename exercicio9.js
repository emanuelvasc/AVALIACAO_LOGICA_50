// Exercicio 9
const prompt = require("prompt-sync")();
let minutos = Number(prompt("Digite os minutos de estudo: "));

if (minutos < 30) {
    console.log("Pouco tempo");
} else if (minutos < 60) {
    console.log("Bom inicio");
} else {
    console.log("Otima dedicacao");
}
