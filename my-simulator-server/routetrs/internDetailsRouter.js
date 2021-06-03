const express = require('express');
const details = require('../models/intern-details-model')

const routers = express.Router();
routers.post('/createdoc', function(req, res){
    if(!req.body){
        return res.status(400).send();
    }
    new details(req.body.body).save(function(err, newDoc){
        if(err){
            return res.status(500).send(err);
        }
        res.status(200).send(newDoc);
    })
})

module.exports = routers