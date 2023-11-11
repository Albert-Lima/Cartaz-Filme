var bttMenu = document.querySelector('#botãoMenu')
var barra1Menu = document.querySelector('#barra1Menu')
var barra2Menu = document.querySelector('#barra2Menu')
var BarraNavegação = document.querySelector('#navegação')

function abrirMenu(){
    barra1Menu.classList.toggle('barra1-2')
    barra2Menu.classList.toggle('barra2-2')

    bttMenu.classList.toggle('BttMenu1')
    bttMenu.classList.toggle('BttMenu2')

    BarraNavegação.classList.toggle('navegação1')
    BarraNavegação.classList.toggle('navegação2')
}
bttMenu.addEventListener('click', abrirMenu)