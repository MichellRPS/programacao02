$('form').submit(function(e) {
    e.preventDefault();
    validar();
});
$('#pesquisar').click(function(e) {
    e.preventDefault();
    pesquisarCep(document.formulario.cep.value);
});
function validar() {
    if(dadosPessoaisValidos() && dadosEnderecoValidos() && dadosLoginValidos() && espacamentoValido()) {
        alert("Formulário enviado com sucesso!");
    }
};
function dadosPessoaisValidos() {
    // dados pessoais
    var nome            = document.formulario.nome;
    var sobrenome       = document.formulario.sobrenome;
    var data_nascimento = document.formulario.data_nascimento;
    var ano             = data_nascimento.value.split("-")[0];
    var mes             = data_nascimento.value.split("-")[1];
    var dia             = data_nascimento.value.split("-")[2];
    var rg              = document.formulario.rg;
    var cpf             = document.formulario.cpf;
    // verificações
    if(nome.value == "") {
        alert("Digite o seu nome");
        nome.focus();
        return false;
    }
    if(nome.value.length < 5) {
        alert("Digite o seu nome usando pelo menos 5 letras");
        nome.focus();
        return false;
    }
    if(sobrenome.value == "") {
        alert("Digite o seu sobrenome");
        sobrenome.focus();
        return false;
    }
    if(data_nascimento.value == "") {
        alert("Digite a sua data de nascimento");
        data_nascimento.focus();
        return false;
    }
    if(dia<1 || dia>31 || mes<1 || mes>12 || ano<1900 || ano>new Date().getFullYear()) {
        alert("Data de nascimento inválida");
        data_nascimento.focus();
        return false;
    }
    if(rg.value == "") {
        alert("Digite o seu RG");
        rg.focus();
        return false;
    }
    if(rg.value.length < 15) {
        alert("RG inválido");
        rg.focus();
        return false;
    }
    if(cpf.value == "") {
        alert("Digite o seu CPF");
        cpf.focus();
        return false;
    }
    if(cpf.value.length < 14 || !cpfValido(cpf.value)) {
        alert("CPF inválido");
        cpf.focus();
        return false;
    }
    return true;
};
function dadosEnderecoValidos() {
    // dados de endereço
    var rua     = document.formulario.rua;
    var numero  = document.formulario.numero;
    var bairro  = document.formulario.bairro;
    var estado  = document.formulario.estado;
    var cidade  = document.formulario.cidade;
    var cep     = document.formulario.cep;
    // verificações
    if(cep.value == "") {
        alert("Digite o CEP da sua rua");
        cep.focus();
        return false;
    }
    if(cep.value.replace(/\D/g, "") == "" || cep.value.replace(/\D/g, "").length != 8) {
        alert("CEP inválido");
        cep.focus();
        return false;
    }
    if(rua.value == "") {
        alert("Digite a sua rua");
        rua.focus();
        return false;
    }
    if(numero.value == "") {
        alert("Digite o número da sua casa");
        numero.focus();
        return false;
    }
    if(numero.value.replace(/\D/g, "") == "") {
        alert("Número de rua inválido");
        numero.focus();
        return false;
    }
    if(bairro.value == "") {
        alert("Digite o seu bairro");
        bairro.focus();
        return false;
    }
    if(estado.value == "default") {
        alert("Selecione o seu estado");
        estado.focus();
        return false;
    }
    if(cidade.value == "") {
        alert("Digite a sua cidade");
        cidade.focus();
        return false;
    }
    return true;
};
function dadosLoginValidos() {
    // dados de login
    var email       = document.formulario.email;
    var login       = document.formulario.login;
    var senha       = document.formulario.senha;
    var confirmacao = document.formulario.confirmacao;
    // verificações
    if(email.value == "") {
        alert("Digite o seu email");
        email.focus();
        return false;
    }
    if(login.value == "") {
        alert("Digite o seu login");
        login.focus();
        return false;
    }
    if(senha.value == "") {
        alert("Digite a sua senha");
        senha.focus();
        return false;
    }
    if(confirmacao.value == "") {
        alert("Confirme a sua senha");
        confirmacao.focus();
        return false;
    }
    if(confirmacao.value != senha.value) {
        alert("As senhas digitadas são diferentes");
        confirmacao.focus();
        return false;
    }
    return true;
};
function espacamentoValido(valor) {
    // dados pessoais
    var nome            = document.formulario.nome;
    var sobrenome       = document.formulario.sobrenome;
    var rg              = document.formulario.rg;
    // dados de endereço
    var rua             = document.formulario.rua;
    var numero          = document.formulario.numero;
    var bairro          = document.formulario.bairro;
    var cidade          = document.formulario.cidade;
    // dados de login
    var email           = document.formulario.email;
    var login           = document.formulario.login;
    var senha           = document.formulario.senha;
    // verificações de dados pessoais
    if(!validarEspacamento(nome.value)) {
        alert("Nome inválido");
        nome.focus();
        return false;
    }
    if(!validarEspacamento(sobrenome.value)) {
        alert("Sobrenome inválido");
        sobrenome.focus();
        return false;
    }
    if(!validarEspacamento(rg.value)) {
        alert("RG inválido");
        rg.focus();
        return false;
    }
    // verificação de dados de endereço
    if(!validarEspacamento(rua.value)) {
        alert("Rua inválida");
        rua.focus();
        return false;
    }
    if(!validarEspacamento(numero.value)) {
        alert("Número de rua inválido");
        numero.focus();
        return false;
    }
    if(!validarEspacamento(bairro.value)) {
        alert("Bairro inválido");
        bairro.focus();
        return false;
    }
    if(!validarEspacamento(cidade.value)) {
        alert("Cidade inválida");
        cidade.focus();
        return false;
    }
    // verificação de dados de login
    if(!validarEspacamento(email.value)) {
        alert("E-mail inválido");
        email.focus();
        return false;
    }
    if(!validarEspacamento(login.value)) {
        alert("Login inválido");
        login.focus();
        return false;
    }
    if(!validarEspacamento(senha.value)) {
        alert("Senha inválida");
        senha.focus();
        return false;
    }
    return true;
};
function validarEspacamento(valor) {
    // percorre string digitado pelo usuário
    for(var i = 0; i < valor.length; i ++) {
        // verifica se há mais de um espaço em branco
        if(valor.charAt(i) == ' ' && valor.charAt(i + 1) == ' ') {
            return false;
        }
    }
    return true;
};
function cpfValido(cpf) {
    // substitui todos os caracteres, exceto números, por vazio
    cpf = cpf.replace(/\D/g, "");
    // valida os números do CPF
    if (cpf.length !== 11 || ['00000000000', '11111111111', '22222222222',
    '33333333333', '44444444444', '55555555555', '66666666666',
    '77777777777', '88888888888', '99999999999'].includes(cpf)) {
        return false;
    }
    soma = 0;
    for(i = 0; i < 9; i ++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    resto = 11 - (soma % 11);
    if(resto == 10 || resto == 11) {
        resto = 0;
    }
    if(resto != parseInt(cpf.charAt(9))) {
        return false;
    }
    soma = 0;
    for (i = 0; i < 10; i ++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if(resto == 10 || resto == 11) {
        resto = 0;
    }
    if(resto != parseInt(cpf.charAt(10))) {
        return false;
    }
    return true;
};
function limparDadosEndereco() {
    document.formulario.rua.value       = ("");
    document.formulario.bairro.value    = ("");
    document.formulario.cidade.value    = ("");
    document.formulario.estado.value    = ("default");
};
function retornarDadosCep(dados) {
    if (!("erro" in dados)) {
        // preenche dados de endereço, exceto número da rua, com dados da pesquisa do CEP
        document.formulario.rua.value       = (dados.logradouro);
        document.formulario.bairro.value    = (dados.bairro);
        document.formulario.cidade.value    = (dados.localidade);
        document.formulario.estado.value    = (dados.uf);
    }
    else {
        // significa que o CEP não foi encontrado
        limparDadosEndereco();
        alert("CEP não encontrado");
    }
};
function pesquisarCep(cep) {
    // substitui todos os caracteres, exceto números, por vazio
    cep = cep.replace(/\D/g, "");
    if(cep != "") {
        var regex = /^[0-9]{8}$/;
        if(regex.test(cep)) {
            document.formulario.rua.value       = ("...");
            document.formulario.bairro.value    = ("...");
            document.formulario.cidade.value    = ("...");
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=retornarDadosCep';
            document.body.appendChild(script);
        } else {
            limparDadosEndereco();
            alert("CEP inválido");
            document.formulario.cep.focus();
        }
    } else {
        limparDadosEndereco();
        alert("CEP não encontrado");
    }
};