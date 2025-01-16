const express = require('express');
const router = express.Router();


const demoController = require('../controllers/demoControllers');

//URL params

router.get('/demo/:name/:city',demoController.demo);

//Request Body

router.post('/demo2',demoController.demo2);

// Headers

router.post('/demo3',demoController.demo3);

//Cookies
router.post('/demo4',demoController.demo4)
router.get('/users', demoController.users);

module.exports = router;