const {Router} = require('express');
const router = Router();

const {getZapatillas, createZapatillas, getZapatillasById, deleteZapatillas} = require('../controllers/zapatillas.controllers')

router.get('/zapatillas', getZapatillas);
router.get('/zapatillas/:id', getZapatillasById);
router.delete('/zapatillas/:id', deleteZapatillas)
router.post('/zapatillas', createZapatillas);

module.exports = router;
