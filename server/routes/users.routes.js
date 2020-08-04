const { Router } = require('express');
const router = Router();


const { 
    paginaRegistro,
    registrarUsuario,
    paginaLogin,
    verificarLogeo
} = require('../controllers/users.controllers');



router.get('/registro', paginaRegistro);
router.post('/registro', registrarUsuario);


router.get('/login', paginaLogin);
router.post('/logi', verificarLogeo);



module.exports = router;
