const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: String
});
const user = mongoose.model('userData', userSchema);


exports.user = user;
