const mongoose = require('mongoose');
const { number } = require('prop-types');

const userSchema = mongoose.Schema({
    user_id :  new mongoose.Types.ObjectId, 

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo:{
        type: Number,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    interest: {
        type: String
    },
    user_type:[String]
})

const UserModel=mongoose.Model('UserModel',userSchema);

module.exports = {UserModel, userSchema};