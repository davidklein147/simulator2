
const enCoding = require('../utils/crypto');
const token = require('../utils/token');
const tokenModel = require('../models/token-model')

function chackAoth(req, res, next){
    console.log('chack');
    var tokenCh = new tokenModel(false, req.body.token);
    if(tokenCh.isExpired()){
    return res.status(401).send();
    }
    return  next();

}

module.exports = chackAoth;