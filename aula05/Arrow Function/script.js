// MESMO CÓDIGO, POREM ESSA ATIVIDADE PEDE ALGUMAS FUNÇÕES

//Gasolina: R$ 6,69
//Etanol: R$ 5,80
//Diesel: R$ 6,20

// valores de cada combustível
const preco = {
    gasolina = 6.69,
    etanol = 5.80,
    diesel = 6.20
}

const atualizarValor = ("combustivel", litros) => litros = parseFloat (document.getElementById("litros").value)

function atualizarValor => {
    let tipo = document.getElementById("combustivel").value
    let litros = parseFloat(document.getElementById("litros").value)
    let precoPorLitros
}
    switch (tipo) {
        case "gasolina":
            precoPorLitros = precoGasolina
            break
        case "etanol":
            precoPorLitros = precoEtanol
            break
        case "diesel":
            precoPorLitros = precoDiesel
            break
        default:
            console.log("Escolha uma opção")
            return
    }
    console.log(tipo)
    console.log(precoPorLitros)

    //chamar a função "CalcularAbastecimento"
    CalcularAbastecimento(precoPorLitros, litros)
}

let tipo = document.getElementById("combustivel")
tipo.addEventListener("change", atualizarValor)

function CalcularAbastecimento(precoCombustivel, litros) {
    let valorTotal = precoCombustivel * litros
    document.getElementById("resultado").textContent = valorTotal
}

let litros = document.getElementById("litros")
litros.addEventListener("input", atualizarValor)