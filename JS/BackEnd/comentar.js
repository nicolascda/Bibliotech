const express = require('express');
const router = express.Router();
const pool = require('./db');
var app = express();
// GET all clients

router.get('/', async (req, res) => {
    const { Livro_id } = req.body;

    try {
        const clients = await pool.query(`SELECT comentario.comentario_Usuario_Id, comentario.comentario_Livro_Id, usuario.nome AS usuario_nome,
        comentario.nota, comentario.perfil_Img, comentario.comentarioTexto
        FROM comentario  
        INNER JOIN usuario ON comentario.comentario_Usuario_Id = usuario.id
        INNER JOIN livros AS livro ON comentario.comentario_Livro_Id = livro.id
        WHERE comentario.comentario_Livro_Id = 3;`);

        res.json(clients);

        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    // const { Livro_id } = req.params.id;

    try {
        const clients = await pool.query(`SELECT comentario.comentario_Usuario_Id, comentario.comentario_Livro_Id, usuario.nome AS usuario_nome,
        comentario.nota, comentario.perfil_Img, comentario.comentarioTexto
        FROM comentario  
        INNER JOIN usuario ON comentario.comentario_Usuario_Id = usuario.id
        INNER JOIN livros AS livro ON comentario.comentario_Livro_Id = livro.id
        WHERE comentario.comentario_Livro_Id = ?;`, [req.params.id]);

        res.json(clients);

        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST create client
router.post('/', async (req, res) => {
    const { User_id, Livro_id, ComentarioTexto, Nota } = req.body;
    
    if (!User_id || !Livro_id) {
        return res.status(400).json({ error: 'Está faltando algum id' });
    }

    try {
        const result = await pool.query
            (`INSERT comentario (comentario_Livro_Id, comentario_Usuario_Id, comentarioTexto, nota) VALUES (
            ?, ?, ?, ?);`,
            [Livro_id, User_id, ComentarioTexto, Nota ]
        );
        res.status(201).json({
            message: 'Mensage enviada com sucesso'
        });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json ({ error: 'Livro Reservado já existe'})
        } else {
            res.status(500).json({ error: error.message });
        }
    }
    
});

// DELETE client
router.delete('/', async (req, res) => {
    const { User_id, Livro_id } = req.body;

    try {
        const result = await pool.query(`DELETE FROM reservado WHERE livro_id = ? AND usuario_id = ?;`, [Livro_id, User_id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Livro reservado não encontrado' });
        }
        
        res.json({ message: 'Livro reservado deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
