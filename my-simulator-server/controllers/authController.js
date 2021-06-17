const userModel = require('../models/user-model');
const enCoding = require('../utils/crypto');
const token = require('../utils/token');
const tokenModel = require('../models/token-model');

function userController() {
    function createUser(req, res) {
        console.log('post');
        console.log(req.body);
        if (!req.body ||
            !req.body.details ||
            !req.body.details.name ||
            !req.body.register ||
            !req.body.register.userName ||
            !req.body.register.password) {
            console.log("err");
            return res.status(400).send({ mas: "missing details" });
        }
        if (!req.body.roleNum) {
            req.body.roleNum = 300;
        }
        if (!req.body.role) {
            req.body.role = 'intern';
        }
        req.body.register.password = enCoding.cipher(req.body.register.password);
        var newIntern = new userModel(req.body);
        newIntern.save(function (err, newDoc) {
            if (err) {
                console.log(err);
                return res.status(500).send(err)
            }
            newToken = new tokenModel(true, null, newDoc._id, req.body.details.id,
                req.body.details.name, newDoc.roleNum)
            res.status(201).send({ _id: newToken._id, name: newToken.name, roleNum: newDoc.roleNum, token: newToken.token, moreDetails: newDoc.moreDetails });
            console.log(newDoc);
        });
    }

    function login(req, res) {
        console.log(req.body);
        if (!req.body.userName || !req.body.password) {
            return res.status(400).send()
        }
        userModel.findOne({ "register.userName": req.body.userName },
            { _id: 1, "details.id": 1, "details.name": 1, "register.password": 1, roleNum: 1 },
            function (err, doc) {
                console.log(doc);
                if (err) {
                    console.log(err);
                    return res.status(500).send();
                }
                if (!doc) {
                    return res.status(404).send({ mas: "user name or password is'nt corrent" })
                }
                if (!enCoding.compareCipher(req.body.password, doc.register.password)) {
                    console.log("login");
                    return res.status(401).send({ mas: "user name or password is't correct" });
                }
                newToken = new tokenModel(true, null, doc._id, doc.details.id,
                    doc.name, doc.roleNum)
                res.status(200).send({ _id: doc._id, name: doc.details.name, roleNum: doc.roleNum, token: newToken.token, moreDetails: doc.moreDetails })
            })
    }

    function chacking(req, res) {
        console.log("chacking");
        if (!req.body.userName) {
            return res.status(400).send()
        }
        userModel.findOne({ "register.userName": req.body.userName }, function (err, doc) {
            if (err) {
                return res.status(500).send();
            }
            res.status(200).send(doc != null);
        })

    }

    return {
        createUser,
        login,
        chacking
    }
}

module.exports = userController();