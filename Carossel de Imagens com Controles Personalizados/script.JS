let indiceAtual = 0; 
const imagens = document.getElementsByClassName('imagem'); 

function mostrarImagem(direcao) { 
    imagens[indiceAtual].classList.remove('ativo'); 
    indiceAtual = (indiceAtual + direcao + imagens.length) % imagens.length; 
    imagens[indiceAtual].classList.add('ativo'); 
}