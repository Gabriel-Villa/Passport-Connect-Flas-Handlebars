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
    req.flash('success_msg', 'Nota agregada con exito');
    res.redirect('/notes');
}


notesController.formularioEditarNota = async (req,res) => {
    const id = req.params.id
    const note = await Note.findById(id);
    res.render('notes/editar-nota.hbs', { note });
}

notesController.editarNota = async (req,res) => {
    const { title, description } = req.body;
    const id = req.params.id;
    await Note.findByIdAndUpdate(id, {title: title, description: description});
    req.flash('success_msg', 'Nota editada con exito');
    res.redirect('/notes');
    
}

notesController.eliminarNota = async (req,res) => {
    const id = req.params.id
    await Note.findByIdAndDelete(id);
    req.flash('success_msg', 'Nota eliminada con exito');
    res.redirect('/notes');
}


module.exports = notesController;