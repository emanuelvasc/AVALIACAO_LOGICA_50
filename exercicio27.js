// Exercicio 27
const prompt = require("prompt-sync")();
let nivel = Number(prompt("Digite o nivel do reservatorio em porcentagem: "));

if (nivel < 0 || nivel > 100) {
    console.log("Valor invalido");
} else if (nivel < 20) {
    console.log("Critico");
} else if (nivel < 50) {
    console.log("Baixo");
} else if (nivel < 80) {
    console.log("Medio");
} else {
    console.log("Alto");
}
