// Exercicio 20
const prompt = require("prompt-sync")();
let dias = Number(prompt("Digite quantos dias faltam para o evento: "));

if (dias < 0) {
    console.log("Evento encerrado");
} else if (dias === 0) {
    console.log("E hoje");
} else if (dias <= 7) {
    console.log("Esta semana");
} else {
    console.log("Ainda falta");
}
