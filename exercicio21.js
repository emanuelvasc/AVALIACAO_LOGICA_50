// Exercicio 21
const prompt = require("prompt-sync")();
let pacotes = Number(prompt("Digite a quantidade de pacotes: "));

if (pacotes <= 0) {
    console.log("Sem estoque");
} else if (pacotes <= 4) {
    console.log("Critico");
} else if (pacotes <= 14) {
    console.log("Baixo");
} else {
    console.log("Suficiente");
}
