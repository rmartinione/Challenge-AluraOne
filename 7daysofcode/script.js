document.addEventListener('DOMContentLoaded', function() {
    const botoesGradiente = document.querySelectorAll('.botao-gradiente');
    const botaoTemaEscuro = document.getElementById('botao-tema-escuro');
    const botaoTemaClaro = document.getElementById('botao-tema-claro');

    botoesGradiente.forEach(botao => {
        botao.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default navigation behavior
            window.location.href = botao.href; // Navigate to the link
        });

        // Simple animation for the button
        botao.addEventListener('mouseover', function() {
            botao.style.transform = 'scale(1.1)';
            botao.style.transition = 'transform 0.2s ease';
            botao.style.cursor = 'pointer';
        });

        botao.addEventListener('mouseout', function() {
            botao.style.transform = 'scale(1)';
            botao.style.transition = 'transform 0.2s ease';
        });
    });

    botaoTemaEscuro.addEventListener('click', function() {
        document.body.classList.add('tema-escuro');
        document.body.classList.remove('tema-claro');
    });

    botaoTemaClaro.addEventListener('click', function() {
        document.body.classList.remove('tema-escuro');
        document.body.classList.add('tema-claro');
    });

    // Responsiveness for mobile/tablet
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 480) {
            document.body.style.fontSize = '14px';
        } else {
            document.body.style.fontSize = '16px';
        }
    });
});

document.getElementById('botao-tema-escuro').addEventListener('click', () => {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
});

document.getElementById('botao-tema-claro').addEventListener('click', () => {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
});
