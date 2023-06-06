// const { default: Swal } = require("sweetalert2");
var fk_Clube = ''
var id_user = sessionStorage.ID_USUARIO

function enviarRespostas() {
  resposta1 = pergunta_1.value
  resposta2 = pergunta_2.value
  resposta3 = pergunta_3.value
  resposta4 = pergunta_4.value

  respostaUsuario = [
    resposta1, resposta2, resposta3, resposta4
  ]

  // TODAS AS RESPOSTAS COM A OU TIMES QUE POSSUEM FINTAS
  if (respostaUsuario == 'A,A,A,A') {
    console.log("Real Madrid")
    document.getElementById('logo_nenhum_clube').src = '../assets/real_madrid.png'
    document.getElementById('logo_nenhum_clube').style = "width: 180px"
    fk_Clube = 7
  }
  else if (respostaUsuario == 'A,A,A,B') {
    console.log("Manchester City")
    document.getElementById('logo_nenhum_clube').src = '../assets/Manchester_City.png'
    document.getElementById('logo_nenhum_clube').style = "width: 250px"
    fk_Clube = 11
  }
  else if (respostaUsuario == 'A,A,B,A') {
    console.log("Manchester United")
    document.getElementById('logo_nenhum_clube').src = '../assets/Manchester_United.png'
    fk_Clube = 12
  }
  else if (respostaUsuario == 'A,A,B,B') {
    console.log("Liverpool")
    document.getElementById('logo_nenhum_clube').src = '../assets/Liverpool_FC.png'
    fk_Clube = 10
  }
  else if (respostaUsuario == 'A,A,C,A') {
    console.log("PSG")
    document.getElementById('logo_nenhum_clube').src = '../assets/psg.png'
    fk_Clube = 13
  }
  else if (respostaUsuario == 'A,A,C,B') {
    console.log("Bayer Muncher!")
    document.getElementById('logo_nenhum_clube').src = '../assets/FC_Bayern_Munchen.png'
    fk_Clube = 5
  }
  else if (respostaUsuario == 'A,B,A,A') {
    console.log("Chelsea")
    document.getElementById('logo_nenhum_clube').src = '../assets/chelsea.png'
    fk_Clube = 4
  }
  else if (respostaUsuario == 'A,B,A,B') {
    console.log("Real Madrid")
    document.getElementById('logo_nenhum_clube').src = '../assets/real_madrid.png'
    document.getElementById('logo_nenhum_clube').style = "width: 180px"
    fk_Clube = 7
  }
  else if (respostaUsuario == 'A,B,B,A') {
    console.log("Barcelona")
    document.getElementById('logo_nenhum_clube').src = '../assets/FCBarcelona.png'
    fk_Clube = 6
  }
  else if (respostaUsuario == 'A,B,B,B') {
    console.log("Inter")
    document.getElementById('logo_nenhum_clube').src = '../assets/inter-milan.png'
    fk_Clube = 8
  }
  else if (respostaUsuario == 'A,B,C,A') {
    console.log("Borussia Dortmund!")
    document.getElementById('logo_nenhum_clube').src = '../assets/borussia.png'
    fk_Clube = 3 
  }
  else if (respostaUsuario == 'A,A,C,B') {
    console.log("Chelsea!")
    document.getElementById('logo_nenhum_clube').src = '../assets/chelsea.png'
    fk_Clube = 5
  }
  else if (respostaUsuario == 'A,C,A,A') {
    console.log("Atlético de Madrid!")
    document.getElementById('logo_nenhum_clube').src = '../assets/atletico_de_madrid.png'
    document.getElementById('logo_nenhum_clube').style = "width: 240px"
    fk_Clube = 2
  }
  else if (respostaUsuario == 'A,C,A,B') {
    console.log("Liverpool")
    document.getElementById('logo_nenhum_clube').src = '../assets/Liverpool_FC.png'
    fk_Clube = 10
  }
  else if (respostaUsuario == 'A,C,B,A') {
    console.log("Manchester United")
    document.getElementById('logo_nenhum_clube').src = '../assets/Manchester_United.png'
    fk_Clube = 12
  }
  else if (respostaUsuario == 'A,C,B,B') {
    console.log("Juventus")
    document.getElementById('logo_nenhum_clube').src = '../assets/Juventus.png'
    fk_Clube = 9
  }
  else if (respostaUsuario == 'A,C,C,A') {
    console.log("Totteham Hotspur")
    document.getElementById('logo_nenhum_clube').src = '../assets/tottenham.png'
    fk_Clube = 14
  }
  else if (respostaUsuario == 'A,C,C,B') {
    console.log("Borussia Dortmund")
    document.getElementById('logo_nenhum_clube').src = '../assets/borussia.png'
    fk_Clube = 3
  }

  // TODAS AS RESPOSTAS COM B OU TIMES QUE SÃO BONS EM POSSE DE BOLA

  else if (respostaUsuario == 'B,A,A,A') {
    console.log("Borussia Dortmund")
    document.getElementById('logo_nenhum_clube').src = '../assets/borussia.png'
    fk_Clube = 3
  }
  else if (respostaUsuario == 'B,A,A,B') {
    console.log("Totteham Hotspur")
    document.getElementById('logo_nenhum_clube').src = '../assets/tottenham.png'
    fk_Clube = 14
  }
  else if (respostaUsuario == 'B,A,B,A') {
    console.log("Barcelona")
    document.getElementById('logo_nenhum_clube').src = '../assets/FCBarcelona.png'
    fk_Clube = 6
  }
  else if (respostaUsuario == 'B,A,B,B') {
    console.log("Real Madrid")
    document.getElementById('logo_nenhum_clube').src = '../assets/real_madrid.png'
    document.getElementById('logo_nenhum_clube').style = "width: 180px"
    fk_Clube = 7
  }
  else if (respostaUsuario == 'B,A,C,A') {
    console.log("Bayer Muncher!")
    document.getElementById('logo_nenhum_clube').src = '../assets/FC_Bayern_Munchen.png'
    fk_Clube = 5
  }
  else if (respostaUsuario == 'B,A,C,B') {
    console.log("Chelsea!")
    document.getElementById('logo_nenhum_clube').src = '../assets/chelsea.png'
    fk_Clube = 5
  }
  else if (respostaUsuario == 'B,B,A,A') {
    console.log("Juventus")
    document.getElementById('logo_nenhum_clube').src = '../assets/Juventus.png'
    fk_Clube = 9
  }
  else if (respostaUsuario == 'B,B,A,B') {
    console.log("Liverpool")
    document.getElementById('logo_nenhum_clube').src = '../assets/Liverpool_FC.png'
    fk_Clube = 10
  }
  else if (respostaUsuario == 'B,B,B,A') {
    console.log("Atlético de Madrid!")
    fk_Clube = 2
  }
  else if (respostaUsuario == 'B,B,B,B') {
    console.log("Inter")
    document.getElementById('logo_nenhum_clube').src = '../assets/inter-milan.png'
    fk_Clube = 8
  }
  else if (respostaUsuario == 'B,B,C,A') {
    console.log("Mancherster City!")
    document.getElementById('logo_nenhum_clube').src = '../assets/Manchester_City.png'
    document.getElementById('logo_nenhum_clube').style = "width: 250px"
    fk_Clube = 11
  }
  else if (respostaUsuario == 'B,A,C,B') {
    console.log("Totteham Hotspur")
    document.getElementById('logo_nenhum_clube').src = '../assets/tottenham.png'
    fk_Clube = 14
  }
  else if (respostaUsuario == 'B,C,A,A') {
    console.log("Borussia Dortmund")
    document.getElementById('logo_nenhum_clube').src = '../assets/borussia.png'
    fk_Clube = 3
  }
  else if (respostaUsuario == 'B,C,A,B') {
    console.log("Juventus")
    document.getElementById('logo_nenhum_clube').src = '../assets/Juventus.png'
    fk_Clube = 9
  }
  else if (respostaUsuario == 'B,C,B,A') {
    console.log("Real Madrid")
    document.getElementById('logo_nenhum_clube').src = '../assets/real_madrid.png'
    document.getElementById('logo_nenhum_clube').style = "width: 180px"
    fk_Clube = 7
  }
  else if (respostaUsuario == 'B,C,B,B') {
    console.log("Chelsea")
    document.getElementById('logo_nenhum_clube').src = '../assets/chelsea.png'
    fk_Clube = 5
  }
  else if (respostaUsuario == 'B,C,C,A') {
    console.log("Barcelona")
    document.getElementById('logo_nenhum_clube').src = '../assets/FCBarcelona.png'
    fk_Clube = 6
  }
  else if (respostaUsuario == 'B,C,C,B') {
    console.log("Liverpool")
    document.getElementById('logo_nenhum_clube').src = '../assets/Liverpool_FC.png'
    fk_Clube = 10
  }


  // TODAS AS RESPOSTAS COM C OU TIMES QUE SÃO BONS EM MARCAÇÃO

  else if (respostaUsuario == 'C,A,A,A') {
    console.log("Chelsea")
    document.getElementById('logo_nenhum_clube').src = '../assets/chelsea.png'
    fk_Clube = 5
  }
  else if (respostaUsuario == 'C,A,A,B') {
    console.log("Real Madrid")
    document.getElementById('logo_nenhum_clube').src = '../assets/real_madrid.png'
    document.getElementById('logo_nenhum_clube').style = "width: 180px"
    fk_Clube = 7
  }
  else if (respostaUsuario == 'C,A,B,A') {
    console.log("Borussia Dortmund")
    document.getElementById('logo_nenhum_clube').src = '../assets/borussia.png'
    fk_Clube = 3
  }
  else if (respostaUsuario == 'C,A,B,B') {
    console.log("Liverpool")
    document.getElementById('logo_nenhum_clube').src = '../assets/Liverpool_FC.png'
    fk_Clube = 10
  }
  else if (respostaUsuario == 'C,A,C,A') {
    console.log("Totteham Hotspur")
    document.getElementById('logo_nenhum_clube').src = '../assets/tottenham.png'
    fk_Clube = 14
  }
  else if (respostaUsuario == 'C,A,C,B') {
    console.log("Inter")
    document.getElementById('logo_nenhum_clube').src = '../assets/inter-milan.png'
    fk_Clube = 8
  }
  else if (respostaUsuario == 'C,B,A,A') {
    console.log("Bayer Muncher!")
    document.getElementById('logo_nenhum_clube').src = '../assets/FC_Bayern_Munchen.png'
    fk_Clube = 5
  }
  else if (respostaUsuario == 'C,B,A,B') {
    console.log("Real Madrid")
    document.getElementById('logo_nenhum_clube').src = '../assets/real_madrid.png'
    document.getElementById('logo_nenhum_clube').style = "width: 180px"
    fk_Clube = 7
  }
  else if (respostaUsuario == 'C,B,B,A') {
    console.log("Manchester City")
    document.getElementById('logo_nenhum_clube').src = '../assets/Manchester_City.png'
    document.getElementById('logo_nenhum_clube').style = "width: 250px"
    fk_Clube = 11
  }
  else if (respostaUsuario == 'C,B,B,B') {
    console.log("Juventus")
    document.getElementById('logo_nenhum_clube').src = '../assets/Juventus.png'
    fk_Clube = 9
  }
  else if (respostaUsuario == 'C,B,C,A') {
    console.log("Bayer Muncher!")
    document.getElementById('logo_nenhum_clube').src = '../assets/FC_Bayern_Munchen.png'
    fk_Clube = 5
  }
  else if (respostaUsuario == 'C,A,C,B') {
    console.log("Totteham Hotspur")
    document.getElementById('logo_nenhum_clube').src = '../assets/tottenham.png'
    fk_Clube = 14
  }
  else if (respostaUsuario == 'C,C,A,A') {
    console.log("Juventus")
    document.getElementById('logo_nenhum_clube').src = '../assets/Juventus.png'
  }
  else if (respostaUsuario == 'C,C,A,B') {
    console.log("Chelsea")
    document.getElementById('logo_nenhum_clube').src = '../assets/chelsea.png'
    fk_Clube = 5
  }
  else if (respostaUsuario == 'C,C,B,A') {
    console.log("Borussia Dortmund")
    document.getElementById('logo_nenhum_clube').src = '../assets/borussia.png'
    fk_Clube = 3
  }
  else if (respostaUsuario == 'C,C,B,B') {
    console.log("Barcelona")
    document.getElementById('logo_nenhum_clube').src = '../assets/FCBarcelona.png'
    document.getElementById('logo_nenhum_clube').style = "width: 300px"
    fk_Clube = 6
  }
  else if (respostaUsuario == 'C,C,C,A') {
    console.log("Liverpool")
    document.getElementById('logo_nenhum_clube').src = '../assets/Liverpool_FC.png'
    fk_Clube = 10
  }
  else if (respostaUsuario == 'C,C,C,B') {
    console.log("Manchester City")
    document.getElementById('logo_nenhum_clube').src = '../assets/Manchester_City.png'
    document.getElementById('logo_nenhum_clube').style = "width: 250px"
    fk_Clube = 11
  }
  console.log("A combinação é: " + respostaUsuario)

  fetch("/usuarios/atualizarTime", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        fk_ClubeServer: fk_Clube,
        id_UserServer: id_user
    })
}).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
        //cardErro.style.display = "block";
        console.log ("Olá Robson!" + resposta)
        sessionStorage.FK_CLUBE = `${fk_Clube}`;
        setTimeout(() => {
            window.location = "perfil.html";
        }, "2000")

        limparFormulario();
        finalizarAguardar();
    } else {
        swal("Ops", "Mais de um usuário com o mesmo login e senha!", "error")
    }
}).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    // finalizarAguardar();
});

fetch("/usuarios/puxarDados", {
  method: "GET",
  headers: {
      "Content-Type": "application/json"
    },
  body: JSON.stringify({
    // crie um atributo que recebe o valor recuperado aqui
    // Agora vá para o arquivo routes/usuario.js
    fk_ClubeServer: fk_Clube,
    id_UserServer: id_user
})
}).then(function (resposta_Dados) {
  
  console.log("resposta: ", resposta_Dados);
  
  if (resposta_Dados.ok) {
      //cardErro.style.display = "block";
      // setTimeout(() => {
        //     window.location = "login.html";
        // }, "2000")
        console.log("Consegui puxar os dados!")
  }
}).catch(function (resposta_Dados) {
  console.log(`#ERRO: ${resposta_Dados}`);
});

// return false;

}