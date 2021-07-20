const academic = require('../models/academic-model');
const errors = require('../utils/errors');

function adminController() {
    function addAcademic(req, res) {
        if (!req.body) {
            return res.status(401).send();
        }
        new academic(req.body).save((err, newDoc) => {
            if (err) {
                return errors(res, err);
            }
            res.status(200).send(newDoc);
        })
    }
        function getAllAcademics(req, res){
            if(! req.user){
                return res.status(401).send("not")
            }
            academic.find((err, docs)=>{
                if(err){
                    return errors(res, err)
                }
                res.status(200).send(docs);
            })
        }
    
       return {
        addAcademic,
        getAllAcademics
    }
}
module.exports = adminController();