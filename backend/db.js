const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "benserverplex.ddns.net",
    user: "alunos",
    password: "senhaAlunos",
    database: "alunos_filmes03TA"
});

conexao.connect((erro)=>{
    if(erro){
        console.log("Erro ao conectar");
        return;
    }

    console.log("Banco conectado!");
});

module.exports = conexao;