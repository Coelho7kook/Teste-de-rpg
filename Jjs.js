// Adicionar no final do script.js, mas como estamos separando, vamos verificar se estamos na página de perfil
if (window.location.pathname.endsWith('profile.html')) {
    document.getElementById('logoutBtn').addEventListener('click', function() {
        if (confirm('Tem certeza que deseja sair?')) {
            window.location.href = 'index.html';
        }
    });
}
