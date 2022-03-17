const {mongoose,Schema} = require('mongoose');

const NgoSchema = mongoose.Schema({ 
    ngoName: {
        type: String,
        required: true
    },
    RegNo :{
        type: Number,
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
        type : Number,
        required : true,
    },
    registered_At :{
        type: Date
    },
    members: [{ 
        type : Schema.Types.ObjectId,
        ref : "UserModel"
    }],
    achivements :[{   
        type : Schema.Types.ObjectId,
        ref : "AcheivementModel"
    }],
    event:[{   
        type : Schema.Types.ObjectId,
        ref :"EventsModel"
    }]
})

const NgoModel = mongoose.model('NgoModel',NgoSchema);
module.exports = NgoModel