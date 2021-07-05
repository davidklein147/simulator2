const mongoose = require ("mongoose");

const schema = mongoose.Schema({
    internId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    testId:{
         type: mongoose.Schema.Types.ObjectId,
         ref: "test"
    },
    testRef:String,
    answerRef:String,
    score: Number,
    creationDate:{
        type: Date,
        default: Date.now(),
    }
})
module.exports = mongoose.model("answer", schema);