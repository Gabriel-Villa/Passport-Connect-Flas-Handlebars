const { Router } = require('express');
const router = Router();

/*const {indexPage, aboutPage } = require('../controllers/index.controller');

router.get('/' , indexPage);
router.get('/about' , aboutPage);
*/

router.get('/', (req,res) => {
    res.render('index');
});


module.exports = router;

