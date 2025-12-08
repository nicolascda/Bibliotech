const fundo = document.getElementById('Oi');
var Ativado = false;

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
                if ( Ativado == false)
                {
                    MudarParaAtivado(i);
                    Ativado = true;
                }
                else if ( Ativado == true)
                {
                    MudarParaNaoAtivado(i);
                    Ativado = false;
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