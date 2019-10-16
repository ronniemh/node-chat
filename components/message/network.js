const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', function(req, res){
    console.log(req.body);
    response.sucess(req, res, 'Hola desde get!');
});

router.post('/', function(req, res){
    console.log(req.body);
    response.sucess(req, res, 'Hola desde post!');
});

module.exports = router;