document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validação simples (em produção, isso seria feito no servidor)
    if (username === 'cl7' && password === 'buster') {
        // Redireciona para a página de perfil
        window.location.href = 'profile.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
