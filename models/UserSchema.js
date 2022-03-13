// user related schema
/**
 *  User : 
 *   user name
 *   first and last name
 *   address 
 *   phone no
 *   email
 *   password
 *   interests
 *   user_type
 *    - na
 *    - nu
 *    - nm
 */

const mongoose = require('mongoose');
const { number } = require('prop-types');

const userSchema = mongoose.Schema({ 
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
    user_type:[{ngoAdmin, User, ngoMemeber}]
})

const UserModel=mongoose.Model('UserModel',userSchema);

