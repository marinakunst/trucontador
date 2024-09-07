// Variável global que armazena a pontuação máxima do jogo
var PontuacaoMax = 24

// Função para permitir que o usuário configure a pontuação máxima
function configurarPontuacao() {
    let novaPontuacaoMax = prompt("Escolha a pontuação máxima para o jogo.", PontuacaoMax);
    
    if (novaPontuacaoMax > 0) {
        PontuacaoMax = novaPontuacaoMax
    }
}

// Função para mostrar ou esconder a lista de valores das cartas
function verValoresCartas () {
    let valoresCartas = document.getElementById("valores-cartas");
    
    if (valoresCartas.style.display != "block") {
        valoresCartas.style.display = "block";
    } else {
        valoresCartas.style.display = "none";
    }   
}

// Função para diminuir a pontuação de um jogador
function diminuirPontuacao(elementoPontuacaoId) {

    let elementoPontuacao = document.getElementById(elementoPontuacaoId);

    let pontuacaoJogador = elementoPontuacao.textContent;

    if (pontuacaoJogador == 0) {
        return
    }

    elementoPontuacao.innerHTML = pontuacaoJogador-1
}

// Função para aumentar a pontuação de um jogador
function aumentarPontuacao(elementoPontuacaoId) {
    

    let elementoPontuacao = document.getElementById(elementoPontuacaoId);

    let pontuacaoJogador = +elementoPontuacao.textContent;

    if (pontuacaoJogador == PontuacaoMax) {
        return
    }

    elementoPontuacao.innerHTML = pontuacaoJogador+1
}
