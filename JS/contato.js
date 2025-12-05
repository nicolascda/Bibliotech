document.addEventListener("DOMContentLoaded", () => {

    const userBtn = document.querySelector(".LogadoDiv");
    const perfilModal = document.getElementById("perfilModal");
    const fecharPerfil = document.getElementById("fecharPerfil");

    const fotoPerfil = document.getElementById("fotoPerfil");
    const inputFoto = document.getElementById("inputFoto");

    const perfilNome = document.getElementById("perfilNome");
    const perfilEmail = document.getElementById("perfilEmail");

    const btnSalvarNome = document.getElementById("btnSalvarNome");
    const btnSair = document.getElementById("btnSair");


    // -------------------------------
    // Carregar email salvo na sessão
    // -------------------------------
    const userData = JSON.parse(sessionStorage.getItem("biblio_user"));
    if (userData) {
        perfilEmail.textContent = userData.email;
    }


    // -------------------------------
    // Carregar nome salvo
    // -------------------------------
    const nomeSalvo = localStorage.getItem("perfil_nome");
    if (nomeSalvo) {
        perfilNome.textContent = nomeSalvo;
    }


    // -------------------------------
    // Carregar foto salva
    // -------------------------------
    const fotoSalva = localStorage.getItem("perfil_foto");
    if (fotoSalva) {
        fotoPerfil.src = fotoSalva;
    }


    // -------------------------------
    // Abrir modal ao clicar no usuário
    // -------------------------------
    userBtn.addEventListener("click", () => {
        perfilModal.classList.remove("hidden");
    });

    // Fechar
    fecharPerfil.addEventListener("click", () => {
        perfilModal.classList.add("hidden");
    });


    // -------------------------------
    // Alterar foto
    // -------------------------------
    fotoPerfil.addEventListener("click", () => {
        inputFoto.click();
    });

    inputFoto.addEventListener("change", function () {
        const file = this.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = e => {
            fotoPerfil.src = e.target.result;
            localStorage.setItem("perfil_foto", e.target.result);
        };
        reader.readAsDataURL(file);
    });


    // -------------------------------
    // Salvar nome
    // -------------------------------
    btnSalvarNome.addEventListener("click", () => {
        const nome = perfilNome.textContent.trim();
        if (nome.length < 2) {
            alert("Digite um nome válido.");
            return;
        }

        localStorage.setItem("perfil_nome", nome);
        alert("Nome salvo!");
    });


    // -------------------------------
    // Sair (Logout)
    // -------------------------------
    btnSair.addEventListener("click", () => {
        sessionStorage.removeItem("biblio_user");
        location.href = "index.html";
    });

});
