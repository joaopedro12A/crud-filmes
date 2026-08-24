// ATENÇÃO: troque a URL abaixo pela URL do backend depois do deploy na Vercel
// Exemplo: "https://crud-filmes-backend.vercel.app"
const API_URL = "https://SEU-BACKEND.vercel.app";

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
