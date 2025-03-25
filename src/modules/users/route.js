//Rutas de usuarios

const express = require('express');
const router = express.Router();

const route = express.Router();

router.get('/',function(req,res){ 
    res.send('Ruta del usuario')
});

module.exports = router;