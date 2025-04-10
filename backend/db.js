const mongoose = require('mongoose');

const followedLeagueSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  followed: {
    type: Boolean,
    default: false
  }
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  followedLeagues: [followedLeagueSchema]
});

const UserModel = mongoose.model('User', userSchema);

module.exports = {
  UserModel
};
