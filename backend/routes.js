const express = require("express");
const router = express.Router();

const db = require("./db");

router.get("/filmes", (req, res) => {
    db.query("SELECT * FROM filmes_JoaoPedroViniciusFerreira", (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);
    });
});

router.post("/filmes", (req, res) => {
    const { titulo, genero, duracao, classificacao } = req.body;

    const sql = "INSERT INTO filmes_JoaoPedroViniciusFerreira (titulo, genero, duracao, classificacao) VALUES (?, ?, ?, ?)";

    db.query(sql, [titulo, genero, duracao, classificacao], (erro) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.send("Filme cadastrado!");
    });
});


router.put("/filmes/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, genero, duracao, classificacao } = req.body;

    const sql = "UPDATE filmes_JoaoPedroViniciusFerreira SET titulo=?, genero=?, duracao=?, classificacao=? WHERE id=?";

    db.query(sql, [titulo, genero, duracao, classificacao, id], (erro) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.send("Filme atualizado!");
    });
});


router.delete("/filmes/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM filmes_JoaoPedroViniciusFerreira WHERE id=?", [id], (erro) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.send("Filme apagado!");
    });
});

module.exports = router;
