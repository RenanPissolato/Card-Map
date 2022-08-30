const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const monsters = document.querySelectorAll('.car-monster');
let cartaoAtual = 0

function esconderMonstroSelecionado(){
    const cartaoSelecionado = document.querySelector('.select')
    cartaoSelecionado.classList.remove('select')
}

function mostrarMonstros(indiceCartao){
    console.log(monsters[indiceCartao].classList.add('select'));

}
//------------------------------------------------------------------------
btnAvancar.addEventListener('click', function(){
    if(cartaoAtual === monsters.length - 1) {return};

    esconderMonstroSelecionado();

    cartaoAtual ++;
    mostrarMonstros(cartaoAtual);

})

//--------------------------------------------------------------------------

btnVoltar.addEventListener('click', function(){
    
    if(cartaoAtual === 0) return;

    esconderMonstroSelecionado();

    cartaoAtual --;
    mostrarMonstros(cartaoAtual);

})