
    function cadastrar() {
    //aguardar();
    
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = input_login_user.value;
    var emailVar = input_login_email.value;
    var senhaVar = input_login_password.value;
    
    if (nomeVar == "" || emailVar == "" || senhaVar == "") {
        //cardErro.style.display = "block"
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Preencha todos os campos!',
            showConfirmButton: true,
            timer: 2300
        })
        finalizarAguardar();
        return false;
    }
    else if (nomeVar.length < 3) {
        swal("Ops", "O nome inserido é muito curto. Por favor, insira um nome com pelo menos 3 caracteres", "warning")
    }
    else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1 || emailVar.length < 7) {
        swal("Ops", "O e-mail cadastrado é inválido. Por favor, insira um e-mail válido.", "warning")
    }
    else if (senhaVar.length < 8) {
        swal("Ops", "A senha inserida é muito curta. Por favor,insira uma senha com pelo menos 8 caracteres.", "warning")
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
            })
        }).then(function (resposta) {
    
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
                //cardErro.style.display = "block";
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Seu cadastrado foi feito com sucesso!',
                    showConfirmButton: false,
                    timer: 2300
                })
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
    
