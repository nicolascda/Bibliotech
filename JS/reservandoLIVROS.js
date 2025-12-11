const LocalizacaoCorreta = 'http://localhost:3000/API/RESERVAR';
const Texto = document.getElementById('resultado');
// const classes = document.getElementsByClassName('ElementsTAG');
const BotaoTag = document.getElementsByClassName('ElementsTAG');

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

async function Testar()
{
    const resultado = await VerificarLocalhost(LocalizacaoCorreta);
    console.log(resultado);
    
    Texto.innerText = resultado[1].usuario_nome;
}

Testar();

console.log(BotaoTag[0]);
console.log(BotaoTag.length);

const HigorClass = BotaoTag[0];


for (let i = 0; i < BotaoTag.length; i++)
{
    BotaoTag[i].addEventListener('click', async function() {
        
        console.log('foi');
        // EnviarLivro();
        DeletarReserva();
        
    })
}

async function EnviarLivro()
{
    const UserID = 1;
    const LivroID = 3;
    
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

async function DeletarReserva() {
  const UserID = 1;
  const LivroID = 3;

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