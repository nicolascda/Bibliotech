let LivroID = Number(window.location.pathname.split("/").pop());
const LocalizacaoCorreta = 'http://localhost:3000/API/LIVRO';

async function VerificarLocalhost(Localizacao) {
    try {
        const response = await fetch(Localizacao);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        return data;
    } catch (error) {
        console.log("Http incorreto")
    }
}

LivroID = LivroID - 1;
console.log(`${LivroID}`);


async function CriarLivro()
{
    const resultado = await VerificarLocalhost(LocalizacaoCorreta);

    
    const Section = document.getElementById('SectionLivro');

    const nome = resultado[LivroID].nome;
    const autor = resultado[LivroID].autor;
    const id = resultado[LivroID].id;
    const img = resultado[LivroID].img;
    const genero = resultado[LivroID].Genero;
    const descricao = resultado[LivroID].descricao;
    console.log(resultado[LivroID]);
    console.log(resultado[LivroID].img);
        
        Section.innerHTML += `
            <div class="book-cover">
                <img src="${img}" alt="${nome}">
            </div>

            <div class="book-info">
                <h1>${nome}</h1>

                <h4>Autor: ${autor}</h4>
                <p> Id do Livro: ${id}</p>

                <p>Genêro: ${genero}</p>

                <hr>

                <h3>Descrição</h3>

                <p>
                    ${descricao}
                </p>

            </div>

            `
    

}

CriarLivro();