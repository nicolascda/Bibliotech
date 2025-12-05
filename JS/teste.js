const LocalizacaoCorreta = 'http://localhost:3000/API/LIVRO';
const P = document.getElementById('resultado');


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

async function MostrarPromiseObject()
{
    const resultado = await VerificarLocalhost(LocalizacaoCorreta);

    for(let i = 0; i < resultado.length; i++)
    {
        const lugar = document.getElementById("MultipleDivs");

        const id = resultado[i].id;
        const img = resultado[i].img
        const genero = resultado[i].Genero;
        console.log(id);

        // P.innerHTML += `<br> <img src="${nome}">`;

        
        lugar.innerHTML += `
            <div class="card" id="MultipleDivs" data-genero="${genero}">
                <a href="contato.html/${id}">
                    <img src="${img}" >
                    <svg xmlns="http://www.w3.org/2000/svg"height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" class="tag"><path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z"/>
                    </svg>
                </a>
            </div>
            
            
            `
    }
    // console.log(resultado.length)
    // const nome = resultado[1].nome;

    // console.log(resultado[1].nome)

    // P.innerHTML = nome;
}

MostrarPromiseObject();


// var ValorOpcao = Opcoes.value;
// var Texto = Opcoes.options[Opcoes.selectedIndex].text;

function MostrarGenero()
{
    const Opcoes = document.getElementById('OpcoesSelecionar').value;
    console.log(Opcoes);

    const LivrosEscolhido = document.querySelectorAll(`[data-genero = ${Opcoes}]`);
    const Livros = document.querySelectorAll(`[data-genero]`);
    // console.log(Livros[1].getAttribute(`data-genero`));

    // Livros[0].style.display = 'none';
    
    for(let i = 0; i < Livros.length; i++)
    {
        if ( Opcoes == 'Gênero')
        {
            Livros[i].style.display = 'flex';
        }
        else 
        {
            if ( Livros[i].getAttribute(`data-genero`) != LivrosEscolhido[0].getAttribute(`data-genero`))
            {
                Livros[i].style.display = 'none';
            }
            else
            {
                Livros[i].style.display = 'flex';
            }
        }

        
    }

    // console.log(LivrosEscolhido[0].getAttribute(`data-genero`));

}
