// requirement 
const mongoose = require('mongoose');
const { ProductModel } = require('./product');

const RequirementsSchema = mongoose.Schema({
    req_id:  new mongoose.Types.ObjectId,
    ngo_id : {type: String},
    requuirment_issue : {type:String},
    requirment_from : {type:String},
    requirment_to : {type:String},
    required_prod : [{type: Schema.Types.ObjectId,ref : UserModel}]
})

const RequirmentsModel = mongoose.model('RequirmentsModel',RequirementsSchema);
module.exports = {RequirementsSchema, RequirmentsModel};