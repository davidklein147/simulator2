const userModel = require('../models/user-model');
const details = require('../models/intern-details-model');
const answers = require('../models/testAnswer-model');
const supervisor = require('../models/supervisor-model');
const { Mongoose } = require('mongoose');

function internsController(){
    function createDoc(req, res){
        console.log('createdoc');
        console.log(req.body);
        if (!req.body || !req.body.userId) {
            return res.status(400).send();
        }
        new details(req.body).save(function (err, newDoc) {
            console.log('save');
            if (err) {
                console.log({ err });
                return res.status(500).send(err);
            }
            newDoc.userId = req.body.userId;
            supervisor.find((err, docs)=>{
                if(err){
                    return res.status(500).send();
                }
                console.log(docs);
                newDoc.supervisorId = docs[Math.floor(Math.random() * docs.length)]._id;
                //newDoc.supervisorId = docs[0]._id;
                console.log(newDoc.supervisorId);
                supervisor.findByIdAndUpdate(newDoc.supervisorId, {$push:{internsId: newDoc._id}}, {new: true}, ()=>{} )
            })
            //userModel.updateOne({ _id: req.body.userId }, { $set: { moreDetails: newDoc._id } }, () => { });
            console.log(newDoc);
            res.status(200).send({ newDoc: newDoc });
            console.log('finish');
        })
    }

    function answer (req, res){
        if(!req.body){
            return res.status(400).send();
        }
        new answers(req.body).save((err, newDoc)=>{
            if(err){
                console.log("res");
                return res.status(500).send(err);
            }
            
            res.status(201).send(newDoc);
        });
        
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
        answer,
        gerUserWithInternInfo: gerUserPopulatingAllInfo
    }
}
module.exports = internsController()


/*
function arrayToTable(tName, arr, addObj) {
    if(addObj) {
        arr = arr.map(item => { return {...item, ...addObj}});
    }
    var allKeys = {};
    for (const item of arr) {
        const keys = Object.keys(item);
        for (const key of keys) {
            allKeys[key] = 0;
        }
    }
    allKeys = Object.keys(allKeys);

    let allValues = '';
    for (const item of arr) {
        let values = ''
        for (const key of allKeys) {
            values += (item[key] || 'NULL') + ','
        }
        values = values.slice(0, -1);
        values = '(' + makeField(values);
        values += '),\n';
        allValues += values;
    }
    allValues = allValues.slice(0, -2);
    let qString = 'INSERT INTO ' + tName + `(${allKeys}) VALUES${allValues}`;
    qString =  qString.split('\'NULL\'').join("DEFAULT");
    console.log(qString);
    return qString;
}
function removeEmpty(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v));
}
function makeField(str) {
    str = "'" + replaceAll(str, ",", "', '") + "'";
    return str;
}
function replaceAll(originalString, find, replace) {
    ret = originalString.replace(new RegExp(find, 'g'), replace);
    return ret;
};*/

