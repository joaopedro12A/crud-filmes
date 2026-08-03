const express = require("express");
const router = express.Router();

const db = require("./db");

// Mostrar todos os filmes
router.get("/filmes", (req, res) => {
    db.query("SELECT * FROM filmes_JoaoPedroViniciusFerreira", (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);
    });
});

// Adicionar filme
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

// Atualizar filme
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

// Excluir filme
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