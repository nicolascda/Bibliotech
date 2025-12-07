document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const toast = document.getElementById('toast');

    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const nome = document.getElementById('nomeU').value.trim();
        const senha = document.getElementById('password').value;
        const dia = document.getElementById('dia').value;
        const mes = document.getElementById('mes').value;
        const ano = document.getElementById('ano').value;

        if (!email || !nome || !senha || !dia || !mes || !ano) {
            showToast("Preencha todos os campos!");
            return;
        }

        const data_nasc = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;

        const resposta = await fetch("cadastro.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                nome,
                senha,
                data_nasc
            })
        });

        const dados = await resposta.json();
        showToast(dados.msg);

        if (dados.status === "success") {
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1200);
        }
    });
});
