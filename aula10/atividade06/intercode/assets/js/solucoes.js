// evento 05
$(document).ready(function() {
    $('#redes_sociais_privadas').mouseenter(function() {
        $('#redes_sociais_privadas').css({backgroundColor:'#68A4C4'});
        $('#redes_sociais_privadas .title a').css({color:'white'});
        $('#redes_sociais_privadas .description').css({color:'white'});
        $('#redes_sociais_privadas .title').animate({
            fontSize:'1em'
        });
    });
    $('#redes_sociais_privadas').mouseleave(function() {
        $('#redes_sociais_privadas').css({backgroundColor:'white'});
        $('#redes_sociais_privadas .title a').css({color:'black'});
        $('#redes_sociais_privadas .description').css({color:'black'});
        $('#redes_sociais_privadas .title').animate({
            fontSize:'0.9em'
        });
    });
    $('#intranets').mouseenter(function() {
        $('#intranets').css({backgroundColor:'#68A4C4'});
        $('#intranets .title a').css({color:'white'});
        $('#intranets .description').css({color:'white'});
        $('#intranets .title').animate({
            fontSize:'1em'
        });
    });
    $('#intranets').mouseleave(function() {
        $('#intranets').css({backgroundColor:'white'});
        $('#intranets .title a').css({color:'black'});
        $('#intranets .description').css({color:'black'});
        $('#intranets .title').animate({
            fontSize:'0.9em'
        });
    });
    $('#aplicativos').mouseenter(function() {
        $('#aplicativos').css({backgroundColor:'#68A4C4'});
        $('#aplicativos .title a').css({color:'white'});
        $('#aplicativos .description').css({color:'white'});
        $('#aplicativos .title').animate({
            fontSize:'1em'
        });
    });
    $('#aplicativos').mouseleave(function() {
        $('#aplicativos').css({backgroundColor:'white'});
        $('#aplicativos .title a').css({color:'black'});
        $('#aplicativos .description').css({color:'black'});
        $('#aplicativos .title').animate({
            fontSize:'0.9em'
        });
    });
    $('#projetos_especiais').mouseenter(function() {
        $('#projetos_especiais').css({backgroundColor:'#68A4C4'});
        $('#projetos_especiais .title a').css({color:'white'});
        $('#projetos_especiais .description').css({color:'white'});
        $('#projetos_especiais .title').animate({
            fontSize:'1em'
        });
    });
    $('#projetos_especiais').mouseleave(function() {
        $('#projetos_especiais').css({backgroundColor:'white'});
        $('#projetos_especiais .title a').css({color:'black'});
        $('#projetos_especiais .description').css({color:'black'});
        $('#projetos_especiais .title').animate({
            fontSize:'0.9em'
        });
    });
});
// evento 05 - fim