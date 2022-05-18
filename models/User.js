const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    phone : {type : String, required : true},
    country : {type : String, required : true},
    city : {type : String, required : true},
    address : {type : String, required : true},
    profileImg : {type : String, required : false}

});

module.exports = mongoose.model('User',userSchema);