// const { default: Swal } = require("sweetalert2");

function enviarRespostas() {

  resposta1 = pergunta_1.value
  resposta2 = pergunta_2.value
  resposta3 = pergunta_3.value
  resposta4 = pergunta_4.value

  respostaUsuario = [
    resposta1, resposta3
  ]

  if (respostaUsuario == 'A,A') {
   console.log("Real Madrid")
  }

  console.log("A combinação é: " + respostaUsuario)
}