const Titulo = document.getElementById('LivroMesmoGeneroTitulo');

var flkty = new Flickity('.carousel');

var cellCount = flkty.cells.length;

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


function CriandoCell(imagem, idImagem, url) {
  cellCount++;
  var cell = document.createElement('div');
  var cellMini = document.createElement('div');
  var cellImg = document.createElement('img');
  var link = document.createElement('a');

  link.href=`${idImagem}`;
  cellMini.clasName = 'CarouselDiv';
  cellImg.className = 'CarouselImg carousel-Reservado';
  cellImg.src= `${imagem}`;
  cell.className = 'carousel-cell carousel-Reservado';
//   cell.style.backgroundColor = "cyan";

  cellMini.append(cellImg);
  link.append(cellMini);
  cell.append(link);
  return cell;
}

function CriarCells(imagem, idImagem, url)
{
    var cellElemsTeste = [ CriandoCell(imagem, idImagem, url)];
    console.log(cellElemsTeste);
    // flkty.prepend( cellElemsTeste );
    flkty.append( cellElemsTeste);
}

async function CriarLivroMesmoGenero()
{
    const resultado = await VerificarLocalhost(LocalizacaoCorreta);
    const listaSimples = await FiltrarId(resultado);
    const Genero = await FiltrarGenero(resultado, listaSimples.Genero);
    const ListaGenero = Genero.filter(elemento => elemento.id != (listaSimples.id))

    Titulo.innerHTML = `Livro com o mesmo Gênero - ${JSON.stringify(listaSimples.Genero)}`

    console.log(ListaGenero);

    // if
    for(let i = 0; i < ListaGenero.length; i++)
    {
        const img = (ListaGenero[i].img).replace(/^\./, "");
        const id = ListaGenero[i].id;
        console.log(img, id)
        CriarCells(img, id);
    }


    
}

async function FiltrarGenero(resultado, genero)
{
    const ArrayFind = await resultado.filter(elemento => elemento.Genero === (genero))
    return ArrayFind

}

CriarLivroMesmoGenero();