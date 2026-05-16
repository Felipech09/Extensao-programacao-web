const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

let feedbacks = [];

app.post("/feedbacks/enviar", (req, res) => {

    const { nome, comentario } = req.body;

    feedbacks.push({
        nome,
        comentario
    });

    res.redirect("/feedbacks/lista");
});

app.get("/feedbacks/lista", (req, res) => {

    let lista = "";

    feedbacks.forEach((feedback, index) => {

        lista += `
            <div class="feedback">
                <h3>${feedback.nome}</h3>
                <p>${feedback.comentario}</p>

                <form action="/feedbacks/remover" method="POST">
                    <input type="hidden" name="index" value="${index}">
                    <button type="submit">Remover</button>
                </form>
            </div>
        `;
    });

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">

        <head>
            <meta charset="UTF-8">
            <title>Lista de Feedbacks</title>

            <style>
                body{
                    font-family: Arial;
                    background: #f2f2f2;
                    padding: 40px;
                }

                h1{
                    text-align: center;
                }

                .feedback{
                    background: white;
                    padding: 20px;
                    margin: 20px auto;
                    max-width: 500px;
                    border-radius: 10px;
                }

                button{
                    padding: 10px;
                    border: none;
                    background: red;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                }

                a{
                    display: block;
                    text-align: center;
                    margin-top: 20px;
                }
            </style>

        </head>

        <body>

            <h1>Lista de Feedbacks</h1>

            ${lista}

            <a href="/">Voltar</a>

        </body>

        </html>
    `);
});

// Remover feedback
app.post("/feedbacks/remover", (req, res) => {

    const index = req.body.index;

    feedbacks.splice(index, 1);

    res.redirect("/feedbacks/lista");
});

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
