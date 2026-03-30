// Quando rolar a página para baixo, irá mostrar o icone de subir para cima, ao topo da página.
window.onscroll = function ()
{
    descida()
};

// mostra o botão quando rolar para baixo
function descida() {
    if (document.documentElement.scrollTop > 20)
        {
        document.getElementById("botaoSubir").style.display = "block";
    }
    else
        {
        document.getElementById("botaoSubir").style.display = "none";
    }
}


// sobe para o topo da página
function subirPagina() {
    document.documentElement.scrollTop = 0;
}