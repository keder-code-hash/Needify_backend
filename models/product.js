const mongoose = require('mongoose');
const { UserModel } = require('./UserSchema');

const ProductSchema =mongoose.Schema({
    prod_id: {type:new mongoose.Types.ObjectId},
        prod_name: {
            type:String,
            required:true
        },
        prod_quant:{
            type:Number,
            required : true
        } ,
        donated_by: [{ 
            user: UserModel, 
            quantity : Number
        }]
})
const ProductModel=mongoose.model('ProductModel',ProductSchema);
module.exports={ProductModel,ProductSchema};