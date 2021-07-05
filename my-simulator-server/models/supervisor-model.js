const mongoose = require ('mongoose');
const schema = mongoose.Schema;

const supervisorSchema = new schema({
    userId:{
        type: schema.Types.ObjectId,
        ref:'user'
    },
    medicalInstitution:{
        type: String
    },
    internsId:[{
        type: schema.Types.ObjectId,
        ref:'intern'
    }]
})

module.exports = mongoose.model('supervisor', supervisorSchema);