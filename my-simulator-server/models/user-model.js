const mongoose = require ('mongoose');
const internDetails = require('./intern-details-model');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    details:{
        id:{
            type: String,
            unique: true
        },
        name:{
            type:String,
            required: true
        },
        passport:{
            type:String
        },
        phoneNum:{
            type:String
        },
    },
    register:{
        userName: {
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
    },
    role:{
        type: String
    },
    roleNum:{
        type: Number
    },
    moreDetails :
        {
        type: Schema.Types.ObjectId,
        ref: 'internDetail',
        },

    
});

module.exports = mongoose.model('user',userSchema);