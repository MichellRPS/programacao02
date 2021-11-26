/*
    // jQuery
    //  pode ser usado por meio de uma CDN
    // sintaxe: $(seletor).action();
        // $(seletor): define o seletor usado (elementos HTML)
            // #: o seletor é uma id, que deve ser único na página
            // .: o seletor é uma classe (class)
    // .action(): define a ação que será realizada (função jQuery)
    // função hide: esconde elementos HTML
*/
function apagar() {
    // $('p').hide();
    // $('#p1').hide();
    // $('.paragrafo').hide();
    $('p:first').hide();
}
$(document).ready(function() {
    /*
    $('h1').click(function() {
        $(this).hide();
    });
    */
    /*
    $('h1').dblclick(function() {
        $(this).hide();
    });
    */
    /*
    $('h2').mouseenter(function() {
        alert('Hello!');
    });
    */
    // outros eventos de mouse:
        // mouseleave
        // hover
        // mousedown
});