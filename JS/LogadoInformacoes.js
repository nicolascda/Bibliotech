const user = JSON.parse(sessionStorage.getItem('biblio_user'));


if (user) {
    console.log("ID:", user.id);
    console.log("Nome:", user.nome);
    console.log("Email:", user.email);
    console.log("Senha:", user);
} 
else {
    console.log("Usuário não está logado.");
    // redirecionar para login, se quiser
    window.location.href = 'login.html';
}

const User = document.getElementById('UsuariosInformacao');

User.dataset.idUsuario = user.id;

// console.log(`Id Usuário = ${UserId}`)
User.innerText = user.nome;

const Link = document.getElementById('LinkUsuario');

// Link.href = `./Acervo/Reservados.html/${user.id}`;
// Link.href = `../LivrosReservados.html/${user.id}`;
// LivrosReservados.html



