const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const rotas = require("./routes");
app.use(rotas);

// Roda o servidor localmente (na Vercel, quem cuida disso é o @vercel/node)
if (require.main === module) {
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
}

module.exports = app;
