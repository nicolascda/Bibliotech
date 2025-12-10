const express = require('express');
const router = express.Router();
const pool = require('../JS/db');
var app = express();
// GET all clients

router.get('/', async (req, res) => {

    try {
        const clients = await pool.query('SELECT * FROM reservado');
        
        // console.log("Hello World");
        // res.json('Sucesso');
        res.json(clients);

        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// GET single client
router.get('/:id', async (req, res) => {
    try {
        const  { User_id } = req.body;
        console.log( User_id);
        // const client = await pool.query('SELECT * FROM teste WHERE client_id = ?', [req.params.id]);
        const result = await pool.query('SELECT * FROM reservado WHERE usuario_id = ?', ["1"]);
        if (result.length === 0) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST create client
router.post('/:id', async (req, res) => {
    const { User_id, Livro_id } = req.body;
    // const { User_id, Livro_id } = req.body.params;
    
    if (!User_id || !Livro_id) {
        return res.status(400).json({ error: 'Está faltando algum id' });
    }

    try {
        const result = await pool.query
            ('INSERT INTO reservado (usuario_id, livro_id) VALUES (?, ?)',
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

// PUT update client
router.put('/:id', async (req, res) => {
    const { name } = req.body;
    
    try {
        const result = await pool.query(
            'UPDATE teste.nomes SET name = ? WHERE id = ?',
            [name, req.params.id]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Client not found' });
        }
        
        res.json({ message: 'Client updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE client
router.delete('/:id', async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM clients WHERE client_id = ?', [req.params.id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Client not found' });
        }
        
        res.json({ message: 'Client deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
