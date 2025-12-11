const express = require('express');
const router = express.Router();
const pool = require('../JS/db');
var app = express();
// GET all clients

router.get('/', async (req, res) => {

    try {
        const clients = await pool.query(`SELECT reservado.usuario_id, reservado.livro_id, usuario.nome AS usuario_nome, livro.nome  AS livro_nome, livro.img,
        livro.autor, livro.resumo, livro.Genero, livro.reservado
        FROM reservado  
        INNER JOIN usuario ON reservado.usuario_id = usuario.id
        INNER JOIN livros AS livro ON reservado.livro_id = livro.id
        WHERE reservado.usuario_id = 1 OR 2;`);

        res.json(clients);

        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET single client
router.get('/:id', async (req, res) => {
    try {
        const UserID = req.params.id;
        
        const result = await pool.query(`SELECT reservado.usuario_id, reservado.livro_id, usuario.nome AS usuario_nome, livro.nome  AS livro_nome, livro.img,
        livro.autor, livro.resumo, livro.Genero, livro.reservado
        FROM reservado  
        INNER JOIN usuario ON reservado.usuario_id = usuario.id
        INNER JOIN livros AS livro ON reservado.livro_id = livro.id
        WHERE reservado.usuario_id = ?;`, [UserID]);

        if (result.length === 0) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST create client
router.post('/', async (req, res) => {
    const { User_id, Livro_id } = req.body;
    
    if (!User_id || !Livro_id) {
        return res.status(400).json({ error: 'Está faltando algum id' });
    }

    try {
        const result = await pool.query
            (`INSERT INTO reservado (usuario_id, livro_id) VALUES (?, ?);`,
            [User_id, Livro_id]
        );
        res.status(201).json({
            message: 'Livro reservado com sucesso'
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
