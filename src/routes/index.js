const {Router} = require('express');
const router = Router();

const {getZapatillas} = require('../controllers/index.controllers')

router.get('/zapatillas', getZapatillas)

module.exports = router;
