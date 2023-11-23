const express = require('express');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(express.urlencoded({extended:false}));

// Routes
app.use(require('./routes/index'));

app.listen(PORT);
console.log(`'Server is running on port: ${PORT}'`);