
function validacaoCampos() {
    var nome = input_login_user.value
    var senha = input_login_password.value
    var email = input_login_email.value

    if (email == null || nome == null || senha == null
        || email == undefined || nome == undefined || senha == undefined ||
        email == "" || nome == "" || senha == "") {
            // SE ESTIVER ALGUM CAMPO FALTANDO
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
    }
    else if (nome.length < 3) {
        span_erro_nome.innerHTML = "Oops! Parece que seu texto é muito curto."
        input.style.borderColor = 'red'
        span.style.color = 'red'
        span_erro_nome.style.color = 'red'
        span_erro_nome.style.marginTop = '15px'
        span.style.color = 'red'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'
        btn.style.marginTop = '2px'
    }
    else {
        span_erro_nome.innerHTML = ''
        input.style.borderColor = 'green'
        span.style.color = 'green'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'
    }
}
function validar_email() {
    var email = email_usuario.value
    var input = document.getElementById('email_usuario')
    var span = document.getElementById('campo_email')
    var span_email = document.getElementById('span_erro_email')

    if (email.indexOf("@") == -1 || email.indexOf(".com") == -1 || email.length < 7) {
        span_erro_email.innerHTML = "Ops! Parece que seu email é inválido."
        input.style.borderColor = 'red'
        span_email.style.color = 'red'
        span_email.style.marginTop = '15px'
        span.style.color = 'red'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'

    }
    else {
        span_erro_email.innerHTML = ''
        input.style.borderColor = 'green'
        span.style.color = 'green'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'
    }
}
function validar_senha() {
    var senha = senha_usuario.value
    var input = document.getElementById('senha_usuario')
    var span = document.getElementById('campo_senha')
    var span_senha = document.getElementById('span_senha')
    var btn = document.getElementById('btn')


    if (senha.length < 8) {
        span_senha.innerHTML = 'Ops! Parece que sua senha é muito curta.'
       input.style.borderColor = 'red'
        span.style.color = 'red'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'
        span_senha.style.color = 'red'
          span_senha.style.marginTop = '12px'
          btn.style.marginTop = '2px'


    }
    else {
        span_senha.innerHTML = ''
        input.style.borderColor = 'green'
        span.style.color = 'green'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'
        btn.style.marginTop = '-30px'

    }
}

function cadastrar() {
    //aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = input_nome.value;
    var emailVar = email_usuario.value;
    var senhaVar = senha_usuario.value;
    var personagemVar = select_personagem.value

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || personagemVar <= 0) {
        //cardErro.style.display = "block"
        swal("Ops", "Preencha todos os campos", "error")
        mymusica.play()

        finalizarAguardar();
        return false;
    }
    else if (nomeVar.length < 3) {
        swal("Ops", "O nome inserido é muito curto. Por favor, insira um nome com pelo menos 3 caracteres", "warning")
        mymusica.play()
    }
    else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1 || emailVar.length < 7) {
        swal("Ops", "O e-mail cadastrado é inválido. Por favor, insira um e-mail válido.", "warning")
        mymusica.play()
    }
    else if (senhaVar.length < 8) {
        swal("Ops", "A senha inserida é muito curta. Por favor,insira uma senha com pelo menos 8 caracteres.", "warning")
        mymusica.play()
    }
    else {
        setInterval('oi', 5000)


        // Enviando o valor da nova input
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nomeVar,
                emailServer: emailVar,
                senhaServer: senhaVar,
                personagemServer: personagemVar
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                //cardErro.style.display = "block";

                swal("Bom trabalho!", "Cadastro realizado com sucesso redirecionando a tela de login...!", "success");

                setTimeout(() => {
                    window.location = "login.html";
                }, "2000")

                limparFormulario();
                finalizarAguardar();
            } else {
                swal("Ops", "Mais de um usuário com o mesmo login e senha!", "error")
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
        });

        return false;
    }
}

//function sumirMensagem() {
    //cardErro.style.display = "none"
//}
