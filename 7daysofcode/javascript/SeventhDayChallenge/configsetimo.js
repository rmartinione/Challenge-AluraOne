document.addEventListener("DOMContentLoaded", function() {
    const botaoIniciar = document.getElementById("botao-iniciar");
    const botaoReiniciar = document.getElementById('botao-reiniciar');
    const botaoVoltar = document.querySelector('.botao-voltar');

    // Tenta selecionar a mensagem existente, caso contrário, cria uma nova
    let mensagem = document.querySelector(".mensagem");
    
    if (!mensagem) {
        mensagem = document.createElement('p');
        mensagem.classList.add('mensagem');
        mensagem.textContent = "Bem-vindo ao Sétimo Desafio! Neste desafio, você deverá realizar operações matemáticas. Clique em iniciar.";
        const conteudo = document.querySelector('.conteudo');
        conteudo.insertBefore(mensagem, botaoIniciar); // Coloca a mensagem antes do botão "Iniciar"
    }

    botaoIniciar.addEventListener('click', function() {
        // Oculta a mensagem e o botão iniciar
        mensagem.style.display = 'none';
        botaoIniciar.style.display = 'none';
        
        // Carrega o arquivo de desafio
        const script = document.createElement('script');
        script.src = 'seventhchallenge.js'; // Carrega o script do desafio
        script.defer = true; // Executa o script após o carregamento
        document.body.appendChild(script);

        // Exibe o botão "Jogar Novamente"
        botaoReiniciar.style.display = 'block';
    });

    // Evento para o botão "Jogar Novamente"
    botaoReiniciar.addEventListener('click', function() {
        location.reload(); // Recarrega a página para reiniciar o desafio
    });

    // Evento para o botão "Voltar"
    botaoVoltar.addEventListener('click', function() {
        window.location.href = '../../../index.html'; // Redireciona para a página inicial
    });
});
