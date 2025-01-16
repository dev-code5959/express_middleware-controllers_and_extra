const express = require('express');
const router = express.Router();


const demoController = require('../controllers/demoControllers');


router.get('/demo',demoController.demo)
router.get('/demo1',demoController.demo1)
router.get('/demo2',demoController.demo2)
router.get('/demo3',demoController.demo3)
router.get('/users', demoController.users);

module.exports = router;