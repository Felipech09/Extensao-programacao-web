// objetos
const Pessoa = { // chaves {} é o que diferencia um objeto de array
    nome: "fulano",
    idade: 10,
    fruta: "uva"
} 
console.log(Pessoa)

Pessoa.nome = "anna" // assim que faz para acessar o objeto e modificar o valor
console.log(Pessoa)

//função construtora
class Pessoa1 {
    #nome // o # torna objeto private, propriedade privada
    idade
    constructor (nome, idade){
        this.#nome = nome
        this.idade = idade
    }

    //metodos
    getPessoa(){
        return this.#nome
    }
}

// criar instâncias do objeto
const p1 = new Pessoa1("Felipe", 21) 
const p2 = new Pessoa1("calebe", 20)
p2.nome = "Gabriel"
console.log(p1.nome) // precisa criar um set para setar o valor porque nome agora é privado, e precisa fazer a alteração dentro da classe agora
console.log(p1.getPessoa())
console.log(p1)
console.log(p2)

// arrays
// arrays são muito utilizados em carrinhos de compra
// armazena itens que não necessariamente tem relação um com o outro 
let itens = ["julia", 12] // colchetes [] isso é o que diferencia um array de um objeto 
console.log (itens)

// métodos
//adicionar
itens.push("Laranja") //Adiciona no final do array
console.log(itens)

itens.unshift("Maçã") //Adiciona no inicio do array
console.log(itens)

itens.splice(3, 0, "Pêra") // Adiciona numa posição específica
            // primeiro parametro posição, segundo parametro quantos itens remover e o terceiro o item

//remover
itens.pop() // remove o ultimo elemento
console.log(itens)

itens.shift() // remove o primeiro elemento
console.log(itens)