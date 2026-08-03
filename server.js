const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const rotas = require("./routes");

app.use(rotas);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});