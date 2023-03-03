const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", () => {
  if (imagemAtual === imagens.length - 1) {
    return;
  }

  imagemAtual++;

  esconderImagemAberta();
  mostrarProximaImagem();
  mostrarOuEsconderSetas();
});
setaVoltar.addEventListener("click", () => {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;

  esconderImagemAberta();
  mostrarProximaImagem();
  mostrarOuEsconderSetas();
});

function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".mostrar");
  imagemAberta.classList.remove("mostrar");
}

function mostrarProximaImagem() {
  imagens[imagemAtual].classList.add("mostrar");
}

function mostrarOuEsconderSetas() {
  const PrimeiraImagem = imagemAtual === 0;
  if (PrimeiraImagem) {
    setaVoltar.classList.add("opacidade");
  } else {
    setaVoltar.classList.remove("opacidade");
  }

  const UltimaImagem = imagemAtual === imagens.length - 1;
  if (UltimaImagem) {
    setaAvancar.classList.add("opacidade");
  } else {
    setaAvancar.classList.remove("opacidade");
  }
}
