const ARRAYLIVROS = [
    { id: 1, imagem: "./img/js.png", svg: "http://www.w3.org/2000/svg" },
    { id: 2, imagem: "./img/CSHARP.jpg", svg: "http://www.w3.org/2000/svg" },
    { id: 3, imagem: "./img/OGuiaDoMochileiroDasGalaxias.jpg", svg: "http://www.w3.org/2000/svg" },
    { id: 4, imagem: "./img/OGuiaDoMochileiroDasGalaxias.jpg", svg: "http://www.w3.org/2000/svg" },
    { id: 5, imagem: "./img/OGuiaDoMochileiroDasGalaxias.jpg", svg: "http://www.w3.org/2000/svg" },
]


function carregarLivros(){

    const lugar = document.getElementById("MultipleDivs");

    console.log(lugar)

    ARRAYLIVROS.forEach((livro)=>{
        lugar.innerHTML += `<a href="contato.html/${livro.id}">
        <div class="card" id="MultipleDivs">
            <img src="${livro.imagem}">
            <svg xmlns="${livro.svg}"height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" class="tag"><path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z"/>
            </svg>
        </div>
        </a>
        
        `
    })


}


carregarLivros()