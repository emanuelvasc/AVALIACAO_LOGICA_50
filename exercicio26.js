// Exercicio 26
const prompt = require("prompt-sync")();
let idade = Number(prompt("Digite a idade da arvore em anos: "));

if (idade < 0) {
    console.log("Idade invalida");
} else if (idade <= 2) {
    console.log("Muda");
} else if (idade <= 9) {
    console.log("Jovem");
} else {
    console.log("Adulta");
}
