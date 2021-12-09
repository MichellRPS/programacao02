// evento 01
$(document).ready(function() {
  $('#titulo').hide();
  $('#titulo').fadeIn(2000);
})
// evento 01 - fim
function retornarClientes(data) {
    var itens = "";
    $.each(data, function(chave, valor) {
      itens += '<div class="col-lg-4 col-md-6 portfolio-wrap filter-app"><div class="portfolio-item"><img src="' + valor.imagem + '" class="img-fluid" alt=""><div class="portfolio-info"><h3>' + valor.nome + '</h3><div><a href="' + valor.imagem + '" data-gallery="portfolioGallery" class="portfolio-lightbox" title="' + valor.nome + '"><i class="bx bx-plus"></i></a><a href="portfolio-details.html" title="Portfolio Details"><i class="bx bx-link"></i></a></div></div></div></div>';
      $('#itens').html(itens);
    });
}