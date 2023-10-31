function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;
document.querySelectorAll(‘.tecla’);
const listaDeTeclas = document.querySelectorAll(‘.tecla’);
listaDeTeclas[0].onclick = tocaSomPom;
while () {
}
let contador = 0;
while(contador <8) {}
while(contador <9) {
    listaDeTeclas[0].onclick = tocaSomPom;
    contador = 1;
}