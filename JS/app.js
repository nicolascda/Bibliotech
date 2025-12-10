const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2000);
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    emailError.textContent = '';
    passError.textContent = '';

    const emailVal = email.value.trim();
    const passVal = password.value;

    let ok = true;

    if (!emailVal || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailVal)) {
        emailError.textContent = 'Informe um email válido';
        ok = false;
    }

    if (!passVal || passVal.length < 6) {
        passError.textContent = 'Senha deve ter ao menos 6 caracteres';
        ok = false;
    }

    if (!ok) return;

    const resposta = await fetch("login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: emailVal,
            senha: passVal
        })
    });

    const data = await resposta.json();

    if (data.status === "error") {
        showToast(data.msg);
        return;
    }

    sessionStorage.setItem('biblio_user', JSON.stringify({
        email: data.user.email,
        id: data.user.id,
        nome: data.user.nome,
        loggedAt: Date.now()
    }));

    showToast('Logado com sucesso! Redirecionando...');

    setTimeout(() => {
        window.location.href = 'logado.html';
    }, 900);
});