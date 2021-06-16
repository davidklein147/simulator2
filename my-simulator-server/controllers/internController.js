const userModel = require('../models/user-model')

function internsController(){
    function createDoc(req, res){
        console.log('createdoc');
        // console.log(req);
        if (!req.body || !req.body.userId) {
            return res.status(400).send();
        }
        new details(req.body).save(function (err, newDoc) {
            console.log('save');
            if (err) {
                console.log({ err });
                return res.status(500).send(err);
            }
            userModel.updateOne({ _id: req.body.userId }, { $set: { moreDetails: newDoc._id } }, () => { });
            res.status(200).send({ newDoc: newDoc });
            console.log('finish');
        })
    }
    function gerUserPopulatingAllInfo(req,res){
        userModel.findOne({ _id: req.params }, { "details.name": 1, moreDetails: 1 }, (err, doc) => {
            if (err) {
                res.status(400).send()
            }
            doc.populate('moreDetails', (err, details) => {
                if (err) {
                    console.log("err");
                }
                
                console.log("successfully " + details);
                res.status(200).send(doc);
            })
        })
        console.log("finished");
    } 
    return {
        createDoc,
        gerUserWithInternInfo: gerUserPopulatingAllInfo
    }
}

module.exports = internsController()