// Criando a função para cadastrar
function cadastrar() {
    var dado_usuario = input_login_user.value
    var dado_senha = input_login_password.value
    var dado_email = input_login_email.value

     var todos_dadosUsuario = {
        usuario: dado_usuario,
        senha: dado_senha,
        email: dado_email
    }
    console.log(cadastrar.todos_dadosUsuario);
}