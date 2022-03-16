const {mongoose,Schema} = require('mongoose'); 


const RequirementsSchema = mongoose.Schema({ 
    ngo_id : 
    {
        type: Schema.Types.ObjectId,
        ref : "NgoModel",
        
    },
    requuirment_issue : 
    {
        type:String
    },
    requirment_from : 
    {
        type:String
    },
    requirment_to : 
    {
        type:String
    },
    required_prod : [
        {
            type: Schema.Types.ObjectId,
            ref : "ProductModel",
            donated_by: [{ 
                type : Schema.Types.ObjectId,
                ref: "UserModel"
            }]
        }
    ]
})

const RequirmentsModel = mongoose.model('RequirmentsModel',RequirementsSchema);
module.exports = {RequirementsSchema, RequirmentsModel};