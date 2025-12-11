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
                    EnviarReserva(userID, LivroDataID)
                    // console.log(LivroDataID)
                    
                }
                else if ( Clickado == "1")
                {
                    console.log(`O livro de id: ${LivroDataID} foi removido do usuário de ID: ${userID}`);
                    MudarParaNaoAtivado(i);
                    Clickado = BotaoTag[i].setAttribute(`data-clickado`, "0");
                    DeletarReserva(userID, LivroDataID)
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


async function EnviarReserva(UserID, LivroID)
{
    // const UserID = 1;
    // const LivroID = 3;
    
    try { 
        const response = await fetch("http://localhost:3000/API/RESERVAR", {
            method: "POST",
            headers: {
            // Essential header for sending JSON data
            'Content-Type': 'application/json'
            },
            body: JSON.stringify
            ({ 
                User_id: `${UserID}`,
                Livro_id: `${LivroID}`
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

async function DeletarReserva(UserID, LivroID) {
//   const UserID = 1;
//   const LivroID = 3;

  const url = new URL('http://localhost:3000/API/RESERVAR');

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        User_id: `${UserID}`,
        Livro_id: `${LivroID}`
      })

    });

    if (response.ok) {
      console.log('Reserva deletada com sucesso!');
    } else {
      console.error('Falha ao deletar reserva:', response.statusText);
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
}