const testModel =require("../models/test-model");
const userModel = require("../models/user-model");

function supervisorController(){
    function addTest(req, res){
        console.log("add test");
        if(!req.body){
            return res.status(401).send()
        }
         new testModel(req.body).save( (err, newDoc) => {
             if(err){
                 return res.status(500).send();
             }
             userModel.findOne({_id:newDoc.supervisorId}, {$set:{questionT: newDoc._id}}, ()=>{})
             res.status(201).send()
         })
    }
    return {
        addTest
    }
}
module.exports = supervisorController()