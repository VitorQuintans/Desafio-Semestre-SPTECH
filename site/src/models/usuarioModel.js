const { atualizarDados } = require("../controllers/usuarioController");
var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(nome, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", nome, senha)
    var instrucao = `
        SELECT * FROM Usuarios WHERE nomeUsuario = '${nome}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, senha, email);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuarios (nomeUsuario, senha, email) VALUES ('${nome}', '${senha}', '${email}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarTime(fk_Clube, id_user) {
    console.log(`Olá`)
    var instrucaoUpdate = 
    `UPDATE Usuarios SET fk_Clube = ${fk_Clube} WHERE idUsuario = ${id_user};`;
    console.log("Executando a instrução SQL: \n" + instrucaoUpdate);
    return database.executar(instrucaoUpdate);
  };

  function puxarDados(id_user) {
    var instrucaoPuxarDados = 
    `SELECT fk_Clube FROM Usuarios WHERE idUsuario = ${id_user};`;
    console.log("Executando a instrução SQL: \n" + instrucaoPuxarDados);
    return database.executar(instrucaoPuxarDados);
  };

module.exports = {
    entrar,
    cadastrar,
    listar,
    atualizarTime,
    puxarDados
};