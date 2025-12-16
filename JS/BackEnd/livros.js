const express = require('express');
const router = express.Router();
const pool = require('./db');
var app = express();
// GET all clients



router.get('/', async (req, res) => {

    try {
        const clients = await pool.query('SELECT * FROM livros');
        
        // console.log("Hello World");
        // res.json('Sucesso');
        res.json(clients);

        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:genero', async (req, res) => {

    try {
        const clients = await pool.query('SELECT * FROM livros WHERE genero LIKE ? ORDER BY titulo DESC');//TODO
        
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
        const client = await pool.query('SELECT * FROM teste WHERE client_id = ?', [req.params.id]);
        if (client.length === 0) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.json(client[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST create client
router.post('/', async (req, res) => {
    const { name, email, address } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    
    try {
        const result = await pool.query(
            'INSERT INTO teste (name) VALUES (?)',
            [name]
        );
        res.status(201).json({ 
            client_id: result.affectedRows.client_id, 
            message: 'Client created successfully' 
        });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ error: 'Email already exists' });
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

// app.listen(8080);

module.exports = router;




// -----------------------------------------------------------------------------
// const express = require('express');
// const cors = require('cors');

// const mariadb = require('mariadb');
// const pool = mariadb.createPool({
//      host: 'localhost', 
//      user:'cafeteria', 
//      password: '1234',
//      database: 'teste',
//      connectionLimit: 5
// });
// pool.getConnection()
//     .then(conn => {
    
//       conn.query("SELECT 1 as val")
//         .then((rows) => {
//           console.log(rows); //[ {val: 1}, meta: ... ]
//           //Table must have been created before 
//           // " CREATE TABLE myTable (id int, val varchar(255)) "
//           return conn.query("INSERT INTO nomes value (?)", ["mariadb"]);
//         })
//         .then((res) => {
//           console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
//           conn.end();
//           pool.end();
//         })
//         .catch(err => {
//           //handle error
//           console.log(err); 
//           conn.end();
//           pool.end();
//         })
        
//     }).catch(err => {
//       //not connected
//       pool.end();
// });
