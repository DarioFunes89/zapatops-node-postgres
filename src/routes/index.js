const {Router} = require('express');
const router = Router();

const {getZapatillas, createZapatillas, getZapatillasById} = require('../controllers/index.controllers')

router.get('/zapatillas', getZapatillas);
router.get('/zapatillas/:id', getZapatillasById);
router.post('/zapatillas', createZapatillas);

module.exports = router;
