const Background = document.getElementById("Oi");
const container = document.getElementById("TesteDiv");
// const pool = require('../JS/db');



for (let i = 1; i < 5; i++)
{
    const newTexto = document.createElement('h1');
    // const newImg = document.createElement('img');

    newTexto.innerText = "ola";
    // newImg.src = "./img/OGuiaDoMochileiroDasGalaxias.jpg";
    // container.appendChild(newImg);

    container.appendChild(newTexto);
}