
let express = require('express');
let router = express.Router();
let controller = require('../controller/controller');


router.post('/', (req,res)=>{
    controller.addCity(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllCities(req,res);
});

module.exports = router;