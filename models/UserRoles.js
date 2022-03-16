const {mongoose,Schema}= require('mongoose');


const UserRolesSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    role_slug : {
        type : String ,
        required : true
    },
    resources_roles: [{ 
        create: { type: Boolean },
        delete: { type: Boolean },
        update: { type: Boolean },
        read: { type: Boolean },
      }]
},{timestamps : true})

const UserRoleModel= mongoose.model("UserRolesModel",UserRolesSchema)
module.exports = UserRoleModel