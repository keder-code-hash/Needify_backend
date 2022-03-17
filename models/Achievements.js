const mongoose = require('mongoose');

const AcheivementSchema=mongoose.Schema({ 
    acheivement_name:{
        type:String,
        required:true,
    },
    prize:{
        type:String,
        required:true
    },
    acheivement_date:{
        type:Date,
        required:true
    }
})

const AcheivementModel = mongoose.model('AcheivementModel',AcheivementSchema);

module.exports= AcheivementModel 