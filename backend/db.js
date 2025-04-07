const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {type : String, unique : true, required : true},
    password : String,
    followedLeagues : [{
        type : Number
    }],
    followedTeams : [{
        type : Number
    }]
})

const UserModel = mongoose.model('user', userSchema);

module.exports = {
    UserModel
}