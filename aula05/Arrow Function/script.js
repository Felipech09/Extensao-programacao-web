//Gasolina: R$  6,04
// Etanol: R$ 5.24
// Diesel: R$ 6.22

const precos = {
    gasolina:  6.04,
    etanol: 5.24,
    diesel: 6.22
};

// 2. Arrow Function
const calcularAbastecimento = (precoCombustivel, litros) => {
    const valorTotal = precoCombustivel * litros;
    // Formatação para Real Brasileiro (R$ 0,00)
    return valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// 3. Arrow Function
const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const inputLitros = document.getElementById("litros").value;
    const litros = parseFloat(inputLitros);
    const campoResultado = document.getElementById("resultado");

    // Validação: Campos vazios
    if (!tipo || inputLitros === "") {
        campoResultado.textContent = "R$ 0,00";
        return; 
    }

    // Validação: Números negativos
    if (isNaN(litros) || litros <= 0) {
        alert("Por favor, insira uma quantidade de litros válida e maior que zero.");
        document.getElementById("litros").value = "";
        campoResultado.textContent = "R$ 0,00";
        return;
    }

    const precoPorLitro = precos[tipo];

    // Atualiza a tela com o resultado formatado
    campoResultado.textContent = calcularAbastecimento(precoPorLitro, litros);
};

document.getElementById("combustivel").addEventListener("change", atualizarValor);
document.getElementById("litros").addEventListener("input", atualizarValor);