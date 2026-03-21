// eventos propriedades

// buscar o elemento
let botao1 = document.getElementById("botao1");

// sintaxe do manipulador
botao1.onclick = function(){
    alert("Clique!");
}

botao1.onclick = function(){
    alert("Evento2");
}


let botao2 = document.getElementById("botao2")
botao2.onmouseover = function(){
    botao2.style.backgroundColor = "red"
}

botao2.onmouseout = function(){
    botao2.style.backgroundColor = ""
}

botao2.ondblclick = function(){
    botao2.textContent = "Duplo Clique"
}

// evento = teclado
let campoEntrada = document.getElementById("campoEntrada")
let resultado = document.getElementById("resultado")
campoEntrada.onkeydown = function(event){
    if(event.key == "Enter"){
        console.log("Pressionou a tecla Enter")
        resultado.innerHTML = campoEntrada.value
        campoEntrada.value = ""
    }
}

//addEventListener
let botao3 = document.getElementById("botao3")
let mensagem1 = document.getElementById("mensagem1")
let mensagem2 = document.getElementById("mensagem2")
botao3.addEventListener("click", function(){
    mensagem1.textContent = "Primeiro evento";
})

botao3.addEventListener("click", function(){
    mensagem2.textContent = "Segundo evento";
})

// arrastar e soltar objetos
let caixa = document.getElementById("caixa")
let destino = document.getElementById("destino")

caixa.addEventListener("dragstart", ()=>{ //serve pra arrastar um elemento
    console.log("arrastando o elemento")
})

// soltar o elemento
area.addEventListener("dragover", (e)=>{
    e.preventDefault()
})

area.addEventListener("drop", ()=>{
    area.appendChild(caixa)
})