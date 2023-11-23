const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1384',
    database: 'zapatillas',
    port: '5432'
});

const getZapatillas = async (req,res) => {
    const response = await pool.query('SELECT * FROM zapatillas');
    res.status(200).json(response.rows);
};

const getZapatillasById = async (req,res) => {
    const {id} = req.params;

    const response = await pool.query('SELECT * FROM zapatillas WHERE id = $1', [id]);
    if(response.rows.length === 0){ 
        res.status(404).json({
            message: 'Zapatilla inexistente'
        })
        } else {
        res.status(200).json({
            message: 'Zapatilla encontrada',
            body: response.rows[0]
    })}
}

const createZapatillas = async (req,res) => {
    const {name, talle} = req.body;
    
    const response = await pool.query('INSERT INTO zapatillas (name, talle) VALUES ($1, $2)', [name,talle]);
    res.json({
        message: 'Zapatillas creada',
        body: {name, talle}
    });
};

const updateZapatillas = async (req, res) => {
    const {id} = req.params;
    const {name, talle} = req.body;

    const response = await pool.query('SELECT * FROM zapatillas WHERE id = $1', [id]);
        if(response.rows.length === 0) {
            res.status(404).json({
                message: 'Zapatilla inexistente'
            })
        } else {
            const updateZapatilla = await pool.query('UPDATE zapatillas SET name = $1, talle = $2 WHERE id = $3', [name,talle,id]);
            res.json({
                message: 'Zapatilla actualizada',
                body: {name, talle}
            })
        }
};

const deleteZapatillas = async (req,res) => {
    const {id} = req.params;

    const response = await pool.query('SELECT * FROM zapatillas WHERE id = $1', [id]);
        if(response.rows.length === 0){ 
        res.status(404).json({
            message: 'Zapatilla inexistente'
        })
        } else {
    const responseDelete = await pool.query('DELETE FROM zapatillas WHERE id = $1 RETURNING *', [id]);
        res.status(200).json({
            message: 'Zapatilla eliminada',
            body: responseDelete.rows[0]
    })};

};


module.exports = {
    getZapatillas,
    createZapatillas,
    getZapatillasById,
    deleteZapatillas,
    updateZapatillas
}
