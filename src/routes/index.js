const {Router} = require('express');
const router = Router();

router.get('/zapatillas', (req,res) =>{
    res.send('zapatillas');
})

module.exports = router;