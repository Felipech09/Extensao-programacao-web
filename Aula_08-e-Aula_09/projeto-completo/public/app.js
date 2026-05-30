const form = document.getElementById('user-form')
const userList = document.getElementById('user-list')
carregarUsuario()

//capturar dados do formulário
form.addEventListener('submit', e=>{
    e.preventDefault() //evita recarregar i formulário (página)
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    console.log(nome)

    // chamar a função para cadastrar
    cadastrarUsuario(nome, email)
})

//função para requisitar a rota de cadastrar usuários na API
function cadastrarUsuario(nome, email){
    fetch('/api/users',  { // rota para o servidor
        method: 'post', // create
        headers: {'content-Type':'application/json'}, // formato json
        body: JSON.stringify({nome, email}) // STRING JSON
    })
    .then(()=>{ // usado para tratar a resposta da requisição
        form.reset()
        carregarUsuario()
    })
}

function carregarUsuario(){
    fetch ('api/users', {
        method: 'GET'
    })
    .then(res=> res.json())
    .then(data => {
        userList.innerHTML = ''
        data.forEach(user =>{
            const li = document.createElement('li')
            li.innerHTML = `
            ${user.nome} - ${user.email}
                <button onclick="editarUsuario(${user.id})">Editar</button>
                <button onclick="excluirUsuario(${user.id})">Excluir</button>`
            userList.appendChild(li)
        })
    })
}

function excluirUsuario(id){
    const confirmacao = confirm('Tem certeza?')
    if(!confirmacao){
        return
    }
    fetch(`/api/users/${id}`, {
        method: 'DELETE'
    })
    .then(()=>{
        form.reset()
        carregarUsuario()
    })
}

function editarUsuario(id){
    const confirmacao = confirm('Confirmar edição?')
    const nome = prompt('Novo nome:')
    const email = prompt('Novo email:')
    if(!confirmacao){
        return
    }
    fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            nome,
            email
        })
    })
    .then(()=>{
        form.reset()
        carregarUsuario()
    })
}