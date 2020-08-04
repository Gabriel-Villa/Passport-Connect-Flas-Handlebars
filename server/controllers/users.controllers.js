const usersController = {}
const User = require('../models/User');


usersController.paginaRegistro = async (req,res) => {
    res.render('users/registro');
}

usersController.registrarUsuario = async (req,res) => {
    const errors =  [];
    const { name, email, password, confirm_password } = req.body;
    if(password != confirm_password){
       errors.push({text: "Las contraseñas no son iguales"});
    }
    if(password.length < 4){
        errors.push({text: "+ 4 caracteres"});
    }
    if(errors.length > 0){
        res.render('users/registro', {errors,name,email});
    }else{
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            req.flash('error_msg', 'El email ya existe');
            res.redirect('/registro');
        }else{
            const newUser = new User({name,email,password});
            newUser.password = await newUser.encryptPassword(password);
            req.flash('success_msg', 'Estas registrado');
            await newUser.save();
            res.redirect('/login');
        }
    }

}

usersController.paginaLogin = async (req,res) => {
    res.render('users/login');
}

usersController.verificarLogeo = async (req,res) => {
    res.send('Verificando usuario');
}



module.exports = usersController;