const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1384',
    database: 'zapatillas',
    port: '5432'
});

const getZapatillas = (req,res) =>{
    pool.query('SELECT * FROM zapatillas');
}

module.exports = {
    getZapatillas
}
