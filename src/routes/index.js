const {Router} = require('express');
const router = Router();

const {getZapatillas, createZapatillas, getZapatillasById, deleteZapatillas, updateZapatillas} = require('../controllers/zapatillas.controllers')

router.get('/zapatillas', getZapatillas);
router.get('/zapatillas/:id', getZapatillasById);
router.post('/zapatillas', createZapatillas);
router.put('/zapatillas/:id', updateZapatillas);
router.delete('/zapatillas/:id', deleteZapatillas)

module.exports = router;
