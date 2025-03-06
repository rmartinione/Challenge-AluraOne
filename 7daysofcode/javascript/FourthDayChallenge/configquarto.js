document.addEventListener("DOMContentLoaded", function () {
    const mensagem = document.querySelector(".mensagem");
    const botaoIniciarFixo = document.getElementById('botao-iniciar1');
    const botaoIniciarAleatorio = document.getElementById('botao-iniciar2');
    const botaoReiniciar = document.getElementById('botao-reiniciar');
    const botaoVoltar = document.querySelector('.botao-voltar');

    mensagem.textContent = "Bem-vindo ao Quarto Desafio! Escolha o desafio que deseja fazer.";

    function exibirBotoesIniciar() {
        mensagem.style.display = 'block';
        botaoIniciarFixo.style.display = "block";
        botaoIniciarAleatorio.style.display = "block";
    }

    function limparScript() {
        const scripts = document.querySelectorAll('script[src^="javascript/FourthChallenge"]');
        scripts.forEach(script => script.remove());
    }

    // Função para carregar um script de desafio de forma segura
    function carregarScript(scriptSrc) {
        const scriptExistente = document.querySelector(`script[src="${scriptSrc}"]`);
        if (!scriptExistente) {
            const script = document.createElement('script');
            script.src = scriptSrc;
            script.defer = true;
            document.body.appendChild(script);
        }
    }

    // Evento para o botão de Desafio Fixo
    botaoIniciarFixo.addEventListener('click', () => {
        mensagem.style.display = 'none';
        botaoIniciarFixo.style.display = "none";
        botaoIniciarAleatorio.style.display = "none";
        botaoReiniciar.style.display = 'block';
        limparScript();
        carregarScript('Alura/alura_repositorio/7daysofcode/javascript/FourthDayChallenge/FourthChallenge-fixo.js');  // Link corrigido
    });

    // Evento para o botão de Desafio Aleatório
    botaoIniciarAleatorio.addEventListener('click', () => {
        mensagem.style.display = 'none';
        botaoIniciarFixo.style.display = "none";
        botaoIniciarAleatorio.style.display = "none";
        botaoReiniciar.style.display = 'block';
        limparScript();
        carregarScript('Alura/alura_repositorio/7daysofcode/javascript/FourthDayChallenge/FourthChallenge-aleatorio.js');  // Link corrigido
    });

    // Evento para o botão de reiniciar
    botaoReiniciar.addEventListener('click', function () {
        limparScript();  // Limpar scripts antigos
        mensagem.style.display = 'block';
        botaoIniciarFixo.style.display = "block";
        botaoIniciarAleatorio.style.display = "block";
        botaoReiniciar.style.display = 'none';
    });

    // Evento para o botão Voltar
    botaoVoltar.addEventListener('click', () => {
        window.location.href = '../../index.html'; // Redireciona para a página inicial
    });

    // Exibe os botões de iniciar
    exibirBotoesIniciar();
});
