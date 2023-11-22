const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1384',
    database: 'zapatillas',
    port: '5432'
});

const getZapatillas = async (req,res) =>{
    const response = await pool.query('SELECT * FROM zapatillas');
    res.status(200).json(response.rows);
}

const createZapatillas = async (req,res) =>{
    const {name, talle} = req.body;
    
    const response = await pool.query('INSERT INTO zapatillas (name, talle) VALUES ($1, $2)', [name,talle]);
    res.json({
        message: 'Zapatillas creada',
        body: {name, talle}
    });
};


module.exports = {
    getZapatillas,
    createZapatillas
}
