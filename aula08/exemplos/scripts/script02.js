function valida_campo() {
    if(document.valida.nome.value.length == 0) {
        alert("Digite o seu nome!")
        // direciona o cursor para o campo nome
        document.valida.nome.focus()
        return 0;
    }
}
function valida_campos() {
    var nome = cadastro.nome.value;
    var email = cadastro.email.value;
    var senha = cadastro.senha.value;
    var confirmar = cadastro.confirmar.value;
    // como verificar se o campo nome foi preenchido apenas com espaços em branco
    if(nome == "") {
        alert("Digite o seu nome!");
        cadastro.nome.focus();
        return false;
    }
    if(nome.length < 4) {
        alert("Digite o seu nome completo!");
        cadastro.nome.focus();
        return false;
    }
    if(email == "") {
        alert("Digite o seu email!");
        cadastro.email.focus();
        // o retorno impede que o restante do código seja executado caso a condição seja verdadeira
        return false;
    }
    if(senha == "") {
        alert("Digite a sua senha!");
        cadastro.senha.focus();
        return false;
    }
    if(confirmar == "") {
        alert("Confirme a sua senha!");
        cadastro.confirmar.focus();
        return false;
    }
    if(senha != confirmar) {
        alert("Senhas diferentes!");
        cadastro.senha.focus();
        return false;
    }
}