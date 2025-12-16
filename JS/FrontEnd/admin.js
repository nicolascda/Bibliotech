// Carregar tabela de livros
fetch("./getLivros.php")
    .then(res => res.json())
    .then(livros => {

        const tabela = document.getElementById("tabelaLivros");
        tabela.innerHTML = "";

        livros.forEach(livro => {
            const tr = document.createElement("tr");

            // Verifica status da coluna reservado
            const status = livro.reservado == 1
                ? `<td class="indisp">Indisponível</td>`
                : `<td class="disp">Disponível</td>`;

            tr.innerHTML = `
                <td>${livro.id}</td>
                <td>${livro.nome}</td>
                <td>${livro.autor}</td>
                ${status}
            `;

            tabela.appendChild(tr);
        });

    })
    .catch(err => {
        console.error("Erro ao carregar livros:", err);
    });


// Carregar totais
fetch("./getTotais.php")
    .then(res => res.json())
    .then(data => {

        console.log("Retorno do getTotais.php:", data);

        if (data.erro) {
            console.error("Erro do servidor:", data.erro);
            return;
        }

        document.getElementById("totalLivros").textContent = data.totalLivros ?? 0;
        document.getElementById("totalUsuarios").textContent = data.totalUsuarios ?? 0;
        document.getElementById("totalEmprestimos").textContent = data.totalEmprestimos ?? 0;

    })
    .catch(err => console.error("Erro:", err));


async function carregarEmprestados() {
    const req = await fetch("contarEmprestados.php");
    const total = await req.text();
    document.getElementById("qtdEmprestados").innerText = total;
}

carregarEmprestados();
