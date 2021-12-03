$('form').submit(function(e) {
    e.preventDefault();
    validar();
});
function validar() {
    // dados
    var nome = document.getElementById('nome');
    var empresa = document.getElementById('empresa');
    var email = document.getElementById('email');
    var telefone = document.getElementById('telefone');
    var mensagem = document.getElementById('mensagem');
    // notificação
    var notificacao = document.getElementById('notificacao');
    // verificações
    if(vazio(nome.value)) {
        notificar("Digite o seu nome!");
        return 0;
    }
    if(!espacamentoValido(nome.value)) {
        notificar("Nome inválido! Verifique o espaçamento");
        return 0;
    }
    if(vazio(empresa.value)) {
        notificar("Digite o nome da sua empresa!");
        return 0;
    }
    if(!espacamentoValido(empresa.value)) {
        notificar("Empresa inválida! Verifique o espaçamento");
        return 0;
    }
    if(vazio(email.value)) {
        notificar("Digite o seu endereço de email!");
        return 0;
    }
    if(vazio(telefone.value)) {
        notificar("Digite o número do seu telefone!");
        return 0;
    }
    if(!espacamentoValido(telefone.value)) {
        notificar("Telefone inválido! Verifique o espaçamento");
        return 0;
    }
    if(!telefoneValido(telefone.value)) {
        notificar("Telefone inválido! Use apenas números");
        return 0;
    }
    if(vazio(mensagem.value)) {
        notificar("Digite a sua mensagem!");
        return 0;
    }
    if(!espacamentoValido(mensagem.value)) {
        notificar("Mensagem inválida! Verifique o espaçamento");
        return 0;
    }
    notificarSucesso("E-mail enviado com sucesso!<br>Agradecemos seu contato!");
}
function vazio(valor) {
    if(valor == "") {
        return true;
    }
    return false;
}
function notificar(mensagem) {
    notificacao.style.backgroundColor = "#ff6666";
    notificacao.style.border = "1px solid #ff0000";
    notificacao.style.borderRadius = "5px";
    notificacao.style.color = "#ffffff";
    notificacao.style.textAlign = "center";
    notificacao.innerHTML = mensagem;
    notificacao.focus();
}
function notificarSucesso(mensagem) {
    notificacao.style.backgroundColor = "#68A4C4";
    notificacao.style.border = "1px solid #0000ff";
    notificacao.style.borderRadius = "5px";
    notificacao.style.color = "#ffffff";
    notificacao.style.textAlign = "center";
    notificacao.innerHTML = mensagem;
    notificacao.focus();
}
function telefoneValido(telefone) {
    if(telefone.replace(/\D/g, "") != "") {
        return true;
    }
    return false;
}
function espacamentoValido(valor) {
    for(var i = 0; i < valor.length; i ++) {
        if(valor.charAt(i) == ' ' && valor.charAt(i + 1) == ' ') {
            return false;
        }
    }
    return true;
};