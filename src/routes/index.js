const {Router} = require('express');
const router = Router();

const {getZapatillas, createZapatillas} = require('../controllers/index.controllers')

router.get('/zapatillas', getZapatillas)

router.post('zapatillas', createZapatillas)

module.exports = router;
