const mongoose= require("mongoose");

const schema = mongoose.Schema({
    name:{
        type:String
    },
    file:{
       type:mongoose.Schema.Types.Mixed,
    },
    url:{
        type: String
    },
    supervisorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    creationDate:{
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("test", schema)