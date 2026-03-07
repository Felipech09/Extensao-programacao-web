// DESAFIO
// Criar um sistema que realize a soma de dois números
// O usuário vai informar esses números
// Aproveite o resultado no console.log

// criação da entrada de dados
var n1 = parseFloat (window.prompt("Digite o primerio número: "));
var n2 = parseFloat (window.prompt("Digite o segundo número: "));

// criação do processamento
var resultado = n1 + n2;

// criação da saída de dados
console.log("A soma dos dois números foi: " + resultado);
document.writeln(`<b>A soma dos dois números foi: ${resultado}<b>`);






// estrutura de controle: if-else / switch-case
var hora = 10
if(hora < 12) {
    console.log("Bom dia");
} else if (hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite")
}

var diaSemana = 2;
switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
        case 2:
            console.log("Segunda-feira");
            break;
            default:
                console.log("Escolha uma opção:");
}

// estruturas de repetição: