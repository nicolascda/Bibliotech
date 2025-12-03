const pool = require('../JS/db');
const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log( `Servidor rodando em http://localhost:${PORT}`);
})


// router.post('/logado.html', async (req, res) => {
//     const { nome, img, autor, resumo } = req.body;
    
//     try {
//         const result = await pool.query(
//             'INSERT INTO livros (nome, img, autor, resumo) VALUES (?, ?, ? ,?)',
//             [nome, img, autor, resumo]
//         );
//         res.status(201).json({ 
//             client_id: result.affectedRows.client_id, 
//             message: 'Livro foi criado com sucesso' 
//         });
//     } catch (error) {
//         if (error.code === 'ER_DUP_ENTRY') {
//             res.status(409).json({ error: 'Livro já existe' });
//         } else {
//             res.status(500).json({ error: error.message });
//         }
//     }
// });

app.get('/logado', async (req, res) => {
    const ArrayLivros = await pool.query('SELECT * FROM bibliodb.livros')

    // function carregarLivros(){

    //     const lugar = document.getElementById("MultipleDivs");

    //     console.log(lugar)

    //     ArrayLivros.forEach((livro)=>{
    //         lugar.innerHTML += `<a href="contato.html/${livro.id}">
    //         <div class="card" id="MultipleDivs">
    //             <img src="${livro.imagem}">
    //             <svg xmlns="${livro.svg}"height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" class="tag"><path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z"/>
    //             </svg>
    //         </div>
    //         </a>
            
    //         `
    //     })

    // }

    // carregarLivros();

    const ArrayLivrosResposta = ArrayLivros.json

    return ArrayLivrosResposta;
  
})
// router.get('/logado.html', async (req, res) => {
//     const ArrayLivros = await pool.query('SELECT * FROM livros')

//     carregarLivros(ArrayLivros.json)
// })

// const ARRAYLIVROS = [
//     { id: 1, imagem: "./img/js.png", svg: "http://www.w3.org/2000/svg" },
//     { id: 2, imagem: "./img/CSHARP.jpg", svg: "http://www.w3.org/2000/svg" },
//     { id: 3, imagem: "./img/OGuiaDoMochileiroDasGalaxias.jpg", svg: "http://www.w3.org/2000/svg" },
//     { id: 4, imagem: "./img/OGuiaDoMochileiroDasGalaxias.jpg", svg: "http://www.w3.org/2000/svg" },
//     { id: 5, imagem: "./img/OGuiaDoMochileiroDasGalaxias.jpg", svg: "http://www.w3.org/2000/svg" },
// ]


// function carregarLivros(ARRAYLIVROS){

//     const lugar = document.getElementById("MultipleDivs");

//     console.log(lugar)

//     ARRAYLIVROS.forEach((livro)=>{
//         lugar.innerHTML += `<a href="contato.html/${livro.id}">
//         <div class="card" id="MultipleDivs">
//             <img src="${livro.imagem}">
//             <svg xmlns="${livro.svg}"height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" class="tag"><path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z"/>
//             </svg>
//         </div>
//         </a>
        
//         `
//     })


// }

module.exports = ArrayLivrosResposta;


