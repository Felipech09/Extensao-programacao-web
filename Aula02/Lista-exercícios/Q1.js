<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Jogo de Adivinhação</title>
</head>
<body>
  <h1>Jogo de Adivinhação</h1>
  <p>Tente adivinhar o número secreto entre 1 e 20!</p>
  
  <input type="number" id="palpite" min="1" max="20" placeholder="Digite seu palpite">
  <button onclick="verificar()">Enviar</button>
  
  <p id="mensagem"></p>

  <script>
    const numSecreto = Math.floor(Math.random() * 20) + 1;
    let tentativas = 0;

    function verificar() {
      const palpite = parseInt(document.getElementById("palpite").value);
      tentativas++;

      if (palpite === numeroSecreto) {
        document.getElementById("mensagem").textContent = 
          ` Parabéns, você acertou o número ${numSecreto} em ${tentativas} tentativa(s)!`;
      } else if (palpite > numeroSecreto) {
        document.getElementById("mensagem").textContent = 
          "O número secreto é menor";
      } else if (palpite < numSecreto) {
        document.getElementById("mensagem").textContent = 
          "O número secreto é maior";
      }
    }
  </script>
</body>
</html>








// QUESTÃO 2
const opcoes = ["pedra", "papel", "tesoura"];

const usuario = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();

const computador = opcoes[Math.floor(Math.random() * opcoes.length)];

console.log(`Você escolheu: ${usuario}`);
console.log(`Computador escolheu: ${computador}`);

if (usuario === computador) {
  console.log("Empate!");
} else if (
  (usuario === "pedra" && computador === "tesoura") ||
  (usuario === "papel" && computador === "pedra") ||
  (usuario === "tesoura" && computador === "papel")
) {
  console.log("Você venceu!");
} else if (opcoes.includes(usuario)) {
  console.log("Você perdeu");
} 


// QUESTÃO 3
const numero = parseInt(prompt("Digite um número para ver a tabuada:"));

console.log(`Tabuada do ${numero}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}


// QUESTÃO 4
const linhas = parseInt(prompt("Digite o número de linhas do triângulo:"));

for (let i = 1; i <= linhas; i++) {
  console.log("*".repeat(i));
}


// QUESTÃO 5
const n = parseInt(prompt("Digite quantos termos da série deseja somar:"));

let termo = 0;
let soma = 0;

for (let i = 1; i <= n; i++) {
  termo = parseInt("1".repeat(i));
  soma += termo;
  console.log(`${termo}`);
}

console.log(`A soma dos ${n} primeiros termos é: ${soma}`);
