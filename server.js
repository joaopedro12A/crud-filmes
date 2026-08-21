const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const rotas = require("./");

app.use(rotas);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

async function buscarFilmes() {
    // acessar a rota GET do backend, trazer os filmes e inserir os filmes no HTML
    const resposta = await fetch("http://localhost:3000/all-movies") // JSON
    const filmes = await resposta.json() // converter o JSON em objeto javascript
    const sectionFilmes = document.querySelector(".filmes")

    filmes.forEach((filme) => {
        sectionFilmes.innerHTML += `    
                    <div>
                        <h2>${filme.title}</h2>
                        <p><strong>Gênero:</strong> ${filme.gender}</p>
                        <p><strong>Duração:</strong> ${filme.duration} minutos</p>
                        <p><strong>Classificação indicativa:</strong> ${filme.ageLimit > 0 ? filme.ageLimit + ' anos' : 'Livre'}</p>
                    </div>
                `
    })
}

buscarFilmes()