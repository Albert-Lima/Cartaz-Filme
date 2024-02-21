var bttMenu = document.querySelector('#botãoMenu')
var barra1Menu = document.querySelector('#barra1Menu')
var barra2Menu = document.querySelector('#barra2Menu')
var BarraNavegação = document.querySelector('#navegação')

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.display = "block";
})

//ANIMAÇÃO BOTÃO DE MENU
function abrirMenu(){
    barra1Menu.classList.toggle('barra1-2')
    barra2Menu.classList.toggle('barra2-2')

    bttMenu.classList.toggle('BttMenu1')
    bttMenu.classList.toggle('BttMenu2')

    BarraNavegação.classList.toggle('navegação1')
    BarraNavegação.classList.toggle('navegação2')
}
bttMenu.addEventListener('click', abrirMenu)

var bttHome = document.querySelector('#bttHome')
var bttFotos = document.querySelector('#bttFotos')
var bttElenco = document.querySelector('#bttElenco')
var elenco = document.querySelector('#elenco')
var bttTrailer = document.querySelector('#bttTrailer')
var Trailer = document.querySelector('#Trailer')
var BoxAtores = document.querySelector('#BoxAtores')
var BttMostrarElenco = document.querySelector('#RevelarElenco')
var botãoAba = document.querySelector('#botãoAba')

//FUNÇÃO DE SCROLL 
function ScrollElenco(){
    var ElencoRect = elenco.getBoundingClientRect()
    let centery = ElencoRect.top + ElencoRect.height / 2 - window.innerHeight/2
    window.scrollTo({
        top: centery + window.scrollY,
        behavior: 'smooth' 
    })
}
bttElenco.addEventListener('click', ScrollElenco)


//ANIMAÇÃO DO CONTAINER ELENCO
function MostrarElenco(){
    BttMostrarElenco.innerHTML = 'Mostrar menos'
    BoxAtores.style.height = 'max-content'
    BttMostrarElenco.addEventListener('click', EsconderElenco)
    BttMostrarElenco.removeEventListener('click', MostrarElenco)
    function EsconderElenco(){
        BttMostrarElenco.removeEventListener('click', EsconderElenco)
        BttMostrarElenco.innerHTML = 'Mostrar mais'
        BoxAtores.removeAttribute('style')
        BttMostrarElenco.addEventListener('click', MostrarElenco)
    }
}
BttMostrarElenco.addEventListener('click', MostrarElenco)