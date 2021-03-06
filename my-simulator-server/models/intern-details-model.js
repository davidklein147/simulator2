const mongoose = require ('mongoose');
const userModel = require('./user-model');
const Schema = mongoose.Schema;

var internDetails = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    supervisorId:{
        type: Schema.Types.ObjectId,
        ref:'supervisor'
    },
    personally: {
        age: {
            type: Number,
        },
        country:{
            type: String,
        },
        city:{
            type: String,
        },
        greduationYear:{
            type: String,
        },
        academicIinstitution:{
            type: String,
        }
      },
      profassionally: {
        medicalIinstitution: {
            type: String,
        },
        residency:{
            type: String,
        },
        department: {
            type: String,
        },
        yearInResidency:{
            type: Number,
        },
    }
});

module.exports = mongoose.model("internDetail",internDetails); 