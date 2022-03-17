const {mongoose,Schema} = require('mongoose'); 

const ProductSchema =mongoose.Schema({ 
        prod_name: {
            type:String,
            required:true
        },
        prod_unit : {
            type : String,
            enum : ["kg","gm","amt","Lt"]
        },
        prod_quant:{
            type:Number,
            required : true
        }
})
const ProductModel=mongoose.model('ProductModel',ProductSchema);
module.exports= ProductModel; 