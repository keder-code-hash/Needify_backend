//premission schema
const mongoose = require('mongoose');
const { UserModel } = require('./UserSchema');

const permissionSchema = mongoose.Schema({
    user_type: {
        tye:String,
        required:true
    },
    permission: [String]
})

const PermissionModel=mongoose.Model("Permission",permissionSchema);

export default{
    permissionSchema,
    PermissionModel
}