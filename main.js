$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderocoDaNovaImagem = $ ('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src ="${enderocoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${enderocoDaNovaImagem}" target="_blank" title="Ver imagem em tamnho real">
            Ver imagem em tamnho real
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('')
    });    
});