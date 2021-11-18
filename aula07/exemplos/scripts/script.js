function hora() {
    document.getElementById('demo').innerHTML = Date();
}
function troca() {
    document.getElementById('troca').innerHTML = "Sistemas de Informação";
}
function apagar() {
    document.getElementById('lampada').src = "img/apagada.png";
}
function acender() {
    document.getElementById('lampada').src = "img/acesa.png";
}
function estilizar() {
    document.getElementById('conteudo').style.color = 'yellow';
}
function somar() {
    document.getElementById('soma').innerHTML = 7 + 9;
}