const {mongoose,Schema} = require("mongoose");

const UserPermissionSchema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    resources_roles: [{
      roles_id: { type: Schema.Types.ObjectId, ref : 'UserRoleModel'},
      roles_name: { type:  String },
      create: { type: Boolean },
      delete: { type: Boolean },
      update: { type: Boolean },
      read: { type: Boolean },
    }]
  }, {
    timestamps: true
});

const ResourceModel = mongoose.model("ResourceModel",UserPermissionSchema);
module.exports = ResourceModel;