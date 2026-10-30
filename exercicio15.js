// Exercicio 15
const prompt = require("prompt-sync")();
let paginas = Number(prompt("Digite a quantidade de paginas lidas: "));

if (paginas < 10) {
    console.log("Inicio");
} else if (paginas < 30) {
    console.log("Em progresso");
} else if (paginas < 60) {
    console.log("Muito bem");
} else {
    console.log("Meta superada");
}
