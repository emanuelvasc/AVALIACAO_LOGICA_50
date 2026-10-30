// Exercicio 48
const prompt = require("prompt-sync")();
let nivel = Number(prompt("Digite o nivel do reservatorio em porcentagem: "));

if (nivel < 0 || nivel > 100) {
    console.log("Invalido");
} else if (nivel < 30) {
    console.log("Critico");
} else if (nivel < 70) {
    console.log("Medio");
} else {
    console.log("Alto");
}
