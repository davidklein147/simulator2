const userModel = require('../models/user-model')

function usersController() {
    function getUser(req, res) {
        console.log("get");
        userModel.findOne({name: req.body.name},function(err,doc){
            if(err){
               return res.status(500).send();
            }
            res.status(200).send(doc);
        })
    }
    function getAllUsers(req, res) {
        if(! req.user || req.user.roleNumber > 99){
            return res.status(401).send()
        }
        console.log("all");
         userModel.find(function (err, list) {
            if (err) {
               return res.status(500).send()
            }
            res.status(200).send(list);
        });

    }
    return {
        getUser:getUser,
        getAllUsers:getAllUsers,
    }
}
module.exports = usersController();