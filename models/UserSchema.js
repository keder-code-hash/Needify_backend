const {mongoose,Schema} = require('mongoose'); 

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
    user_type:{
        type: Schema.Types.ObjectId,
        ref : "UserRolesModel", 
    } 
})
userSchema.set("timestamps",true)
const UserModel=mongoose.model('UserModel',userSchema);

module.exports = UserModel;