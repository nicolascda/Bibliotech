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
        const reservado = resultado[i].reservado;
        console.log(id);

        // P.innerHTML += `<br> <img src="${nome}">`;

        
        lugar.innerHTML += `
            <div class="card" id="MultipleDivs" data-genero="${genero}">
                <a href="/Acervo/LivroDetalhes.html/${id}">
                    <img src="${img}" >
                </a>
                <svg data-disponivel="${reservado}"data-id="${id}" xmlns="http://www.w3.org/2000/svg"height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" class="tag ElementsTAG"><path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z"/>
                </svg>
                <p class="reservar">Reservar?</p>
                <svg data-favotiro="S" class="star" fill="#000000" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.486 473.486" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 237.732,386.042 384.416,460.829 357.032,298.473 "></polygon> </g></svg>
                
            </div>
            
            
            `
    }

    // console.log(resultado[2].reservado);
    // console.log(resultado.length)
    // const nome = resultado[1].nome;

    console.log(resultado[1].reservado)

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
