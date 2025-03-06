document.addEventListener("DOMContentLoaded", function() {
    const mensagem = document.querySelector(".mensagem");
    const botaoIniciar = document.getElementById("botao-iniciar");
    const botaoReiniciar = document.getElementById('botao-reiniciar');
    const botaoVoltar = document.querySelector('.botao-voltar');

    // Mensagem inicial do Sexto Desafio
    mensagem.textContent = "Bem-vindo ao Sexto Desafio! Neste desafio, você deverá adivinhar um número aleatório. Clique em iniciar.";

    botaoIniciar.addEventListener('click', function() {
        // Oculta a mensagem e o botão iniciar
        mensagem.style.display = 'none';
        botaoIniciar.style.display = 'none';
        
        // Carrega o arquivo de desafio
        const script = document.createElement('script');
        script.src = 'sixthchallenge.js'; // Chama o arquivo de desafio
        script.defer = true; // Garante que o script será executado após o carregamento da página
        document.body.appendChild(script);

        // Exibe o botão "Tentar Novamente"
        botaoReiniciar.style.display = 'block';
    });

    // Evento para o botão Jogar Novamente
    botaoReiniciar.addEventListener('click', function() {
        location.reload(); // Recarrega a página e reinicia o desafio
    });

    // Evento para o botão Voltar
    botaoVoltar.addEventListener('click', function() {
        window.location.href = '../../index.html'; // Redireciona para a página inicial
    });
});
