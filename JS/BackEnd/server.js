// const express = require('express');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// require('dotenv').config();

// Import route files
const LivroRota = require('./livros');
const ReservaRota = require('./reserva');
const ComentarRota = require('./comentar');


// import LivroRota from "./livros.js"

const texto = [
    {nome: "oi"}
];
// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/API/LIVRO', LivroRota);
app.use('/API/RESERVAR', ReservaRota);
app.use('/API/COMENTAR', ComentarRota);

// Health check endpoint
app.get('/', (req, res) => {
    res.json(texto);
});

app.post('/', (req, res) => {
    const { nome } = req.body;
    
    novoTexto = [
        nome
    ];

    texto.push(novoTexto);

    res.status(201).json({
        msg: "Usuário cadastrado com sucesso"
    });
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: err.message 
    });
});

// Handle 404 routes
app.use('/{*any}', (req, res) => {
    res.status(404).json({ 
        error: 'Route not found',
        requestedUrl: req.originalUrl 
    });
});


// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📊 API Documentation available at http://localhost:${PORT}`);
    console.log(`👥 Clients API: http://localhost:${PORT}/API/LIVRO`);
    console.log(` Rota reservar: http://localhost:${PORT}/API/RESERVAR`);
    console.log(`http://localhost:${PORT}/teste/`);
    
});

module.exports = app;