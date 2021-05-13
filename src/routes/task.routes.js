//03
const express = require('express');
const router = express.Router();

//08
const Task_Model = require('../models/task');
//Task_Model es el modelo de los datos en la DB

Task_Model.find(function(err,tasks) {
    console.log(tasks)
});

router.get('/', (req,res)=>{
    // res.send('Hola desde task.routes GET');
    res.json({
        status: 'API funcionando con JSON'
    });
});

module.exports = router;