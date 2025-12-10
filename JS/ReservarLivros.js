const userID = JSON.parse(sessionStorage.getItem('biblio_user')).id;
const fundo = document.getElementById('Oi');
var Ativado = false;

console.log(userID);

function ValorDoBotaoTag()
{
    const BotaoTag = document.getElementsByClassName('ElementsTAG');
    
    return BotaoTag;
}

function ValorDoTextoTag()
{
    const TextoTag = document.getElementsByClassName('reservar');

    return TextoTag;
}

async function VerificarTag()
{
    const BotaoTag = ValorDoBotaoTag();
    console.log(BotaoTag);
    
    for (let i = 0; i < BotaoTag.length; i++) {
        let Reservado = BotaoTag[i].getAttribute(`data-disponivel`);
        
        console.log(Reservado);
        if ( Reservado == 1)
        {
            Indisponivel(i);
        }
        else {
            BotaoTag[i].addEventListener('click', async function() {
                let Clickado = BotaoTag[i].getAttribute(`data-clickado`);
                let LivroDataID = BotaoTag[i].getAttribute(`data-id`);

                console.log(Clickado);
                if ( Clickado == "0")
                {
                    console.log(`O livro de id: ${LivroDataID} foi adicionado no usuário de ID: ${userID}`);
                    MudarParaAtivado(i);
                    Clickado = BotaoTag[i].setAttribute(`data-clickado`, '1');
                    
                }
                else if ( Clickado == "1")
                {
                    console.log(`O livro de id: ${LivroDataID} foi removido do usuário de ID: ${userID}`);
                    MudarParaNaoAtivado(i);
                    Clickado = BotaoTag[i].setAttribute(`data-clickado`, "0");
                }
            
            
            });
        }
        
    }

    
}

function MudarParaAtivado(i)
{
    const BotaoTag = ValorDoBotaoTag();
    const TextoTag = ValorDoTextoTag();
    BotaoTag[i].style.backgroundColor = "goldenrod";
    TextoTag[i].innerHTML = "Reservado";
    BotaoTag[i].classList.add('ReservadoSucesso');  
    BotaoTag[i].classList.remove('NaoReservado'); 
}

function MudarParaNaoAtivado(i)
{
    const estilo = ``
    const BotaoTag = ValorDoBotaoTag();
    const TextoTag = ValorDoTextoTag();
    TextoTag[i].innerHTML = "Reservar?";
    BotaoTag[i].style = estilo;
    BotaoTag[i].classList.add('NaoReservado');
    BotaoTag[i].classList.remove('ReservadoSucesso');
}

function Indisponivel(i)
{
    const BotaoTag = ValorDoBotaoTag();
    const TextoTag = ValorDoTextoTag();
    TextoTag[i].innerHTML = "Indisponível";
    BotaoTag[i].style.transform = "rotate(45deg)";
    BotaoTag[i].style.backgroundColor = "red";
    BotaoTag[i].classList.add('Indisponibilidade');
}

// ValorDoBotaoTag();
setTimeout(VerificarTag, 100);
// fundo.style.background = "blue";


async function EnviarLivro(UserID, LivroID)
{
    fetch('https://api.example.com/users/:id', options)
        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error(`HTTP error! status: ${response.status}`);
        //     }
        //     return response.json();
        // })
        // .then(data => {
        //     console.log('Created user:', data);
        // })
        // .catch(error => {
        //     console.error('Error creating user:', error);
        // });
        // const 

        const response = await fetch("http://localhost:3000/API/ENVIAR", {
            method: "POST",
            body: JSON.stringify
            ({ 
                User_id: `${UserID}`,
                Livro_id: `${LivroID}`
            }),
        });

}