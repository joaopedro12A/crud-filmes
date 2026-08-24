
const API_URL = "https://crud-filmes-w7ew.vercel.app";

async function buscarFilmes() {
    try {
        const resposta = await fetch(`${API_URL}/filmes`);

        if (!resposta.ok) {
            throw new Error("Erro ao buscar filmes");
        }

        const filmes = await resposta.json();

        const sectionFilmes = document.querySelector(".filmes");

        sectionFilmes.innerHTML = "";

        filmes.forEach((filme) => {
            sectionFilmes.innerHTML += `
                <div class="filme">

                    <h2>${filme.titulo}</h2>

                    <p>
                        <strong>Gênero:</strong>
                        ${filme.genero}
                    </p>

                    <p>
                        <strong>Duração:</strong>
                        ${filme.duracao} minutos
                    </p>

                    <p>
                        <strong>Classificação indicativa:</strong>
                        ${filme.classificacao}
                    </p>

                </div>
            `;
        });

    } catch (erro) {
        console.error("Erro:", erro);
    }
}

buscarFilmes();
