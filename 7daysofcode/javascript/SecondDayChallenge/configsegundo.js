// javascript/SecondDayChallenge/configsegundo.js
document.addEventListener("DOMContentLoaded", function() {
    const mensagem = document.querySelector(".mensagem");
    const botaoIniciar = document.getElementById("botao-iniciar");
    const botaoReiniciar = document.getElementById('botao-reiniciar');
    const botaoVoltar = document.querySelector('.botao-voltar');

    // Mensagem inicial do Segundo Desafio
    mensagem.textContent = "Bem-vindo ao Segundo Desafio! Neste desafio, você deverá responder algumas perguntas, Clique em iniciar.";

    botaoIniciar.addEventListener('click', function(){
        // Oculta a mensagem e o botão iniciar
        mensagem.style.display = 'none';
        botaoIniciar.style.display = 'none';
        
        // Carrega o arquivo de desafio
        const script = document.createElement('script');
        script.src = 'secondchallenge.js';
        script.defer = true; // Garante que o script será executado após o carregamento da página
        document.body.appendChild(script);

        botaoReiniciar.style.display = 'block'; // Mostra o botão "Jogar Novamente"
    });

    // Evento para o botão Jogar Novamente
    botaoReiniciar.addEventListener('click', function(){
        location.reload(); // Recarrega a página
    });
    // Evento para o botão Voltar
    botaoVoltar.addEventListener('click', function(){
        window.location.href='../../index.html';
    });
});
