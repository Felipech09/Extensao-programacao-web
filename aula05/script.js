//Gasolina: R$ 6,69
//Etanol: R$ 5,80
//Diesel: R$ 6,20

// valores de cada combustível
const precoGasolina = 6.69
const precoEtanol = 5.80
const precoDiesel = 6.20

function atualizarValor(){
    let tipo = document.getElementById("combustivel").value
    let litros = parseFloat(document.getElementById("litros").value)
    let precoPorLitros
    
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