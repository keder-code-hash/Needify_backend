const mongoose = require('mongoose');
const { UserModel } = require('./UserSchema');
const { event } = require('./Events');
const NgoSchema = mongoose.Schema({
    ngo_id : new mongoose.Types.ObjectId,
    ngoName: {
        type: String,
        required: true
    },
    RegNo :{
        type: number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phoneNo : {
        type : number,
        required : true,
    },
    registered_At :{
        type: String
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref : UserModel}],
    achivements :[{
        // achivements_name : {type: String},
        // prize_name : {type: String}
    }],
    event:[{
        event_id: [{type: Schema.Types.ObjectId, ref :?? }]
    }]
})

const NgoModel = mongoose.model('NgoModel',NgoSchema);
module.exports = {NgoModel, NgoSchema};