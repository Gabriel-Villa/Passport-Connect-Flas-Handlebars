const { Router } = require('express');
const router = Router();

const {
    notes,
    formularioAgregarNota,
    agregarNota,
    formularioEditarNota,
    editarNota,
    eliminarNota} = require('../controllers/notes.controllers');


router.get('/notes', notes);

router.get('/notes/add', formularioAgregarNota);
router.post('/notes/add', agregarNota);

router.get('/notes/edit/:id', formularioEditarNota);
router.put('/notes/edit/:id', editarNota);

router.delete('/notes/delete/:id', eliminarNota);



module.exports = router;

