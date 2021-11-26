function valida_campo() {
    if(document.valida.nome.value.length == 0) {
        alert("Digite o seu nome!")
        // direciona o cursor para o campo nome
        document.valida.nome.focus()
        return 0;
    }
}