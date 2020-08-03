const { Router } = require('express');
const router = Router();

const {indexPage, aboutPage } = require('../controllers/index.controllers');


router.get('/' , indexPage);
router.get('/about' , aboutPage);


module.exports = router;

