var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT Clube.nomeClube, COUNT(*) as totalVotos FROM Usuarios JOIN Clube  ON idClube = fk_Clube GROUP BY fk_Clube ORDER BY totalVotos;`;
    }
     else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT Clube.nomeClube, COUNT(*) as totalVotos FROM Usuarios JOIN Clube  ON idClube = fk_Clube GROUP BY fk_Clube ORDER BY totalVotos;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegarId(id_user) {
    var instrucaoPuxarDados = 
    `SELECT fk_Clube FROM Usuarios WHERE idUsuario = 2;`;
    console.log("Executando a instrução SQL: \n" + instrucaoPuxarDados);
    return database.executar(instrucaoPuxarDados);
  };

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    pegarId
}
