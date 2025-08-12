echo "# Teste-de-rpg" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Coelho7kook/Teste-de-rpg.git
git push -u origin main# Teste-de-rpg

https://<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Login - FF7</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="login-page">
    <div class="stars"></div>
    <div class="login-container">
        <h1>FINAL FANTASY VII</h1>
        <form id="loginForm">
            <div class="input-group">
                <label for="username">Usuário</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input-group">
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">ENTRAR</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
