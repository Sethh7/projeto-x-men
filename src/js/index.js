const btnAvancar = document.getElementById('bnt-avancar')
const btnvoltar = document.getElementById('bnt-voltar')
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return
    esconderCartaoSelecionado();
    cartaoAtual++;
    CartaoSelecionado();
});

btnvoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return
    esconderCartaoSelecionado()
    
    cartaoAtual--;
    CartaoSelecionado()
})
function CartaoSelecionado() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

