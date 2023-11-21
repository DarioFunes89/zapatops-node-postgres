const express = require('express');
const app = express();


// Middlewares
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(express.urlencoded({extended:false}));

// Routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('Server is running on port 3000');