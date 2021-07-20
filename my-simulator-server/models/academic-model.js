const mongoose = require('mongoose');
const schema = mongoose.Schema;

const academic = new schema({
    name: String,
    ImageUrl:String,
    addres: String
});

module.exports= mongoose.model('academic', academic);