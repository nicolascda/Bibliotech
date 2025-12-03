const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// require('dotenv').config();

// Import route files
const clientRoutes = require('./livros');

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/clients', clientRoutes);

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ 
        message: 'Client-Order Management API is running!',
        timestamp: new Date().toISOString()
    });
});

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
    console.log(`👥 Clients API: http://localhost:${PORT}/api/clients`);
    console.log(`📦 Orders API: http://localhost:${PORT}/api/orders`);
});

module.exports = app;