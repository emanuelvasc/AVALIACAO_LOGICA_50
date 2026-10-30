// Exercicio 17
const prompt = require("prompt-sync")();
let distancia = Number(prompt("Digite os quilometros percorridos: "));

if (distancia < 2) {
    console.log("Curta");
} else if (distancia < 5) {
    console.log("Media");
} else if (distancia < 10) {
    console.log("Longa");
} else {
    console.log("Muito longa");
}
