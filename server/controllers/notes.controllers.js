const notesController = {}
const Note = require('../models/Note');

notesController.notes = async (req,res) => {
    const notes = await Note.find();
    res.render('notes/notas', { notes});
}

notesController.formularioAgregarNota = (req,res) => {
    res.render('notes/nueva-nota');
}

notesController.agregarNota = async (req,res) => {
    const { title , description } = req.body;
    const note = new Note({title,description});
    await note.save();
    res.redirect('/notes');
}


notesController.formularioEditarNota = async (req,res) => {
    const id = req.params.id
    const note = await Note.findById(id);
    res.render('notes/editar-nota.hbs', { note });
}

notesController.editarNota = async (req,res) => {
    res.json('Editandola');
}

notesController.eliminarNota = async (req,res) => {
    const id = req.params.id
    await Note.findByIdAndDelete(id);
    res.redirect('/notes');
}


module.exports = notesController;