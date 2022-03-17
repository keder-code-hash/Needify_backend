const {mongoose,Schema} = require('mongoose');

const DonationSchema= new Schema({
    requirement : {
        type : Schema.Types.ObjectId,
        ref : "RequirmentsModel"
    },
    product : {
        type : Schema.Types.ObjectId,
        ref : "ProductModel"
    },
   
    donation_params :[{
        Amount : {
                type : Number,
                required : true
        },
        DonatedType : {
            type : String,
            enum : ["kg","gm","amt","Lt"]
        },
        DonatedBy : { 
            type : Schema.Types.ObjectId,
            ref : "UserModel"
        }
    }]
     
})


const DonationModel = mongoose.model("DonationModel",DonationSchema);
module.exports = DonationModel;