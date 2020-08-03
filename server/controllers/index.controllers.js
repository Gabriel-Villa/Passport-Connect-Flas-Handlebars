const indexController = {}


indexController.indexPage = (req,res) => {
    res.render('index');
}

indexController.aboutPage = (req,res) => {
    res.render('about');
}

module.exports = indexController;
