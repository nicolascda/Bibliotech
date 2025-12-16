const Section = document.getElementById('SectionLivroReservado');
const SectionSemReserva = document.getElementById('SectionNenhumLivroReservado');
const userID = JSON.parse(sessionStorage.getItem('biblio_user')).id;
const localizacaoCorreta = `http://localhost:3000/API/RESERVAR/${userID}`;
const Carousel = document.getElementById('CarouselPrincipal')
const CarouselCellDiv = document.getElementsByClassName('carousel-cell');

// let Carousel = document.getElementsByClassName('flickity-slider');


var flkty = new Flickity('.carousel');

// var prependButton = document.querySelector('.button--prepend');

// prependButton.addEventListener( 'click', function() {
//   var cellElems = [ makeCell(), makeCell() ];
//   flkty.prepend( cellElems );
// });

var cellCount = flkty.cells.length;

// function makeCell() {
//   cellCount++;
//   var cell = document.createElement('div');
//   cell.className = 'carousel-cell';
//   cell.textContent = cellCount;
//   return cell;
// }

function CriandoCell(imagem, idImagem, url) {
  cellCount++;
  var cell = document.createElement('div');
  var cellMini = document.createElement('div');
  var cellImg = document.createElement('img');
  var link = document.createElement('a');

  link.href=`${url}/${idImagem}`;
  cellMini.clasName = 'CarouselDiv';
  cellImg.className = 'CarouselImg carousel-Reservado';
  cellImg.src= `${imagem}`;
  cell.className = 'carousel-cell carousel-Reservado';

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
    const resultado = await VerificarLocalhost(localizacaoCorreta);
    Section.style.display = "none";

    // const ResultadoUnico = resultado.filter((resultado, index) => {
    //     return resultado.indexOf(item) === index;
    // });

    // console.log(ResultadoUnico);

    // const uniq = [...new Set(resultado)];

    // console.log(uniq);

    const lista = RetornarArray(resultado, 'livro_id');

    console.log(lista);

    if ( lista.length >= 0)
    {
        SectionSemReserva.style.display = "none";
        Section.style.display = "grid";
        console.log("Lista existe")
    }


    for (let i = 0; i < lista.length; i++)
    {
        const imagem = lista[i].img;
        const url = "./Acervo/LivroDetalhes.html";
        const idImagem = lista[i].livro_id;
        CriarCells(imagem, idImagem, url);
    }
}

MostrarPromiseObject();
// criarElementoSection();

console.log(Section);
console.log(` o ID do usuário é ${userID}`);

// function removerDuplicatasPorId(arr, prop) {
//   const idsVistos = new Set();
//   return arr.filter(obj => {
//     // Se o ID ainda não foi visto, adicione ao Set e mantenha o objeto
//     if (!idsVistos.has(obj[prop])) {
//       idsVistos.add(obj[prop]);
//       return true;
//     }
//     // Se o ID já foi visto, filtre (remova) o objeto
//     return false;
//   });
// }

function RetornarArray(arr, prop)
{
    const idsVistos = new Set();
    return arr.filter(obj => {
        if (!idsVistos.has(obj[prop]))
        {
            idsVistos.add(obj[prop]);
            return true;
        }

        return false;
    });
}

