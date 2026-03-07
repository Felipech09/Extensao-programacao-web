// alert("Olá mundo!")

// variáveis
// var (escopo global e local - função) - reatribuição
var animal = "gato"; //pra string use aspas, pra number não use aspas
console.log(animal);
animal = 'peixe'; // pode ser usado ' ou " com ou sem ;
console.log(animal);

//let (escopo local)
let nomeCompleto = "Arrascaeta da Gávea";
console.log(nomeCompleto);
nomeCompleto = "Uno Henrique";
console.log(nomeCompleto);


//const (escopo global e local) - não permite reatribuição
//const valor0 NÃO PODE, as variáveis precisam ser declaradas
const valor0 = 10;
//valor0 = 20; não é permitido para o tipo const
var valor1;

// verificar o tipo de dados (typeof)
console.log(typeof valor0); // serve pra verificar o tipo de dado
console.log(typeof nomeCompleto)

// algorítimo: entrada + processamento + saída
//entrada
var nome = window.prompt("Digite o nome: ");

//saída
console.log("Nome digitado: " + nome + ", aproveite.");

// temolate literal: html + string + variáveis 
console.log(`Nome: ${nome}. aproveite`); //TEM QUE USAR CRASE ` 

// operadores aritieticos: + - * / ** %
// 2 + 2 * 5

// Operadores de comparação: < > >= <= ==  !=
// === !==
console.log(5 == '5'); // Olha apenas os valores por isso dá true (OU LÓGICO)
console.log(5 === '5'); // Olha o tipo e o valor, diferencia string de inteiro por isso dá false (E LÓGICO)
// E LÓGICO ( Basta uma parte ser falsa para que toda a conjunção seja falsa.)
// OU LÓGICO (Se pelo menos uma parte for verdadeira, a disjunção é verdadeira.)




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

// estruturas de repetição: for e while (for é quando você sabe o número exato de interações, já o while é usado quando não se sabe ao certo quantas serão)
for (let i=0;i<10;i++){
    console.log("Valor: " + i); // break e continue
}

var n = 5;
while (n < 5) {
    console.log(n);
    n++
}