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
    console.log(response.rows);
    res.send('zapatillas');
}

module.exports = {
    getZapatillas
}
