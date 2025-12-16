const Estrela = document.getElementsByClassName('EstrelasNota');
const EstrelaComentar = document.getElementsByClassName('EstrelaComentar');
const BotaoEnviar = document.getElementById('BotaoEnviarTextoId');
const AreaComentario = document.getElementById('AreaComentarioId');
const SecaoDeComentarios = document.getElementById('SecaoDeComentarios');
const LocalizacaoCorretaComentario = `http://localhost:3000/API/COMENTAR/${LivroID}`;
// const nota = 4;

console.log(Estrela);

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

async function VerificarValor()
{
    const resultado = await VerificarLocalhost(LocalizacaoCorretaComentario);
    let nota = 0;

    console.log(resultado.length);
    console.log("visulizar");
    if (resultado.length == 0)
    {
        nota = 5;
    }
    else {
        for (let i = 0; i < resultado.length; i++)
        {
            nota += resultado[i].nota;
            console.log(nota);
        }
    }
    
    
    nota = (Math.trunc(nota/resultado.length))
    console.log(`Nota após do arrendodamento ${nota}`)

    for(let i = 0; i < 5; i++)
    {
        console.log(Estrela[i].getAttribute(`data-notafinal`));
        if(Estrela[i].getAttribute(`data-notafinal`) <= nota)
        {
            Estrela[i].style.fill = "yellow";
            console.log('Estrela de número menor');
        }
        else
        {
            console.log('Estrela de número maior');
        }
    }
}

let NotaEstrela

function ValorEstrela()
{

    for(let i = 0; i < EstrelaComentar.length; i++)
    {
        EstrelaComentar[i].addEventListener('click', () => {
            NotaEstrela = EstrelaComentar[i].getAttribute('data-nota')
            ReiniciarValorEstrela();
            for( let o = (NotaEstrela -1 ); o > -1; o--)
            {
                EstrelaComentar[o].style.fill = "yellow";
            }
            console.log(NotaEstrela);
        })
    }
}

function ReiniciarValorEstrela()
{
    for(let i = 0; i < 5; i++)
    {
        EstrelaComentar[i].style.fill = "aliceblue";
        EstrelaComentar[i].style.border = "black";
    }
}

BotaoEnviar.addEventListener('click', async () => {
    const NotaComentario = NotaEstrela;
    if( NotaComentario == undefined || AreaComentario.value == "")
    {
        console.log("Coloque algum valor");
    }
    else {
        console.log(`A nota do comentário é ${ NotaComentario }`)
        console.log(`O valor do texto é ${AreaComentario.value}`);
        console.log('O botão enviou com sucesso as informações');
        console.log(LivroID);
        EnviarComentario(LivroID, user.id, AreaComentario.value, NotaComentario);
    }
    
})
VerificarValor();
ValorEstrela();

async function MostrarComentarios()
{
    const resultado = await VerificarLocalhost(LocalizacaoCorretaComentario);
    console.log(resultado);
    console.log("ALOLAAAAAAAAA")
    for(let i = 0; i < resultado.length; i++)
    {
        SecaoDeComentarios.innerHTML += 
        `
        <div class="ComentarioPerfil">
            <div class="ComentarioPerfilImg">
                <img src="/img/UserProfile.png" class="PerfilUsuario">
                <h4> ${resultado[i].usuario_nome}</h4>
                        
            </div>
            <p class="TextoNota"> ${resultado[i].nota}</p>
            <p class="TextoComentario"> ${resultado[i].comentarioTexto}</p>
        </div>`
    }
    
}

MostrarComentarios();
async function EnviarComentario(LivroID, UserID, Comentario, NotaValor)
{
    
    try { 
        const response = await fetch("http://localhost:3000/API/COMENTAR", {
            method: "POST",
            headers: {
            // Essential header for sending JSON data
            'Content-Type': 'application/json'
            },
            body: JSON.stringify
            ({ 
                Livro_id: `${LivroID}`,
                User_id: `${UserID}`,
                ComentarioTexto: `${Comentario}`,
                Nota: `${NotaValor}`
            }),
            
        });

    const data = await response.json();
    console.log('Success:', data);
    return data;

    } catch(error) {
        console.log(`Algo está faltando, ${error}`)

        throw error
    }

}