// Exercicio 1
const prompt = require("prompt-sync")();
let temperatura = Number(prompt("Digite a temperatura da geladeira: "));

if (temperatura < 0) {
    console.log("Congelando");
} else if (temperatura <= 5) {
    console.log("Ideal");
} else {
    console.log("Verificar refrigeracao");
}
