// buscar um elemento
// buscar pelo ID
let meuElemento = document.getElementById("paragrafo"); // pega a tag "paragrafo" e joga na variável "meuElemento"
console.log(meuElemento);
console.log(meuElemento.textContent);

// buscar pela classe
let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

//imprimir o conteúdo dos paragrafos (classe = paragrafo)
//console.log(paragrafo1[0].textContent);
for(let i=0;i<paragrafo1.length;i++){
    console.log(paragrafo1[i].textContent);
}

//buscar elemento pela tag
let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

// criar elementos HTML via javascript
let destino = document.getElementById("elemento");
let elementoParagrafo = document.createElement("p");
elementoParagrafo.textContent = "paragrafo criado via javascript";
destino.append(elementoParagrafo);

//criar a noosa lista via javascript
let lista = document.getElementById("lista");
let ul = document.createElement("ul");
let itens = ["arroz", "feijão", "banana", "uva"];
for(i=0; i<itens.length; i++){
    // cada vez que entrar precisa criar um "li"
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}
lista.append(ul); //o pai vem antes append é incluir. o pai     inclui o filho

//algorítmo: somar
function somar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    console.log(n1);
    console.log(typeof n1);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    let saida = `Resultado: <u>${soma}</u>`
    document.getElementById("resultado").innerHTML = saida // pra ele conseguir retornar string a variavel e a tag HTML
}


// elementos
let botao = document.getElementById("botao");
botao.onmouseover = function(){
    botao.textContent = "Sabe ler não animal?"
    botao.style.background = "red"
}