/**
 * 1. add/update any donation for any members to any ngo
 * 
 * 2. fetch all donation details based on any NGO
 * 3. fetch all donation details based on any products
 * 4. fetch all donation details based on any ngo names
 * 5. fetch al donation details based on time frame
 * 6. fetch all donation details based on any user
 * 7. fetch by any requirements id
 * 
 */


// {
//     ngo_id : ,
//     user_dets : ,
//     donation_params : [{}]
// }

// {
//     ngo_name : ,
//     requirements_id : ,
//     donated_by : [{}],
//     time_frame : {
//         start:,
//         end:,
//     },
//     prod_name : [{}] 
// }


const express=require("express");
const bodyParser=require("body-parser");
const Donations=require("../models/DonationAmount");
const NgoModel = require("../models/Ngo");
const ngoDonationDetails=express.Router();

ngoDonationDetails.use(bodyParser.json());

ngoDonationDetails.route('/ngo/')
.all((req,res,next)=>
{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next();
})
.get((req,res,next)=>{

})
.post((req,res,next)=>{
    const data=req.body; 
    // fetch all donations details by any requirements details
    NgoModel.find({'ngoName':data.ngo_name}).then((ngoObjId,err)=>{ 
        if(err){
            res.json({"messege" : " error occured"+err});
            res.statusCode=400;
        }
        if(ngoObjId!=null || ngoObjId.length!==0){ 
            Donations.find({ 
                'ngo':ngoObjId
            })
            .populate('requirement')
            .populate('product')
            .populate('ngo')
            .populate('donation_params').
            then((result,err)=>{
                if(err){
                    res.json({"messege" : " error occure"+err});
                    res.statusCode=400;
                }
                if(result!=null || result.length!==0){ 
                    res.json({"messge":result});
                }
            }).catch((err)=>{
                res.statusCode=400;
                res.statusMessage="Error Occured."+err;
            })
        }
    }).catch((err)=>{
        res.json(err);
        res.statusMessage="no object found!"
    }); 
})

ngoDonationDetails.route('/requirements/')
.all((req,res,next)=>
{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next();
})
.post((req,res,next)=>{
    const data=req.body; 
    if(data !=null){ 
        Donations.find({
            'requirement':data.requirements_id
        })
        .populate('requirement')
        .populate('product')
        .populate('ngo')
        .populate('donation_params').
        then((result,err)=>{ 
            if(result!=null || result.length!==0){ 
                res.json({"messge":result});
            }
            else{
                res.json({"messege" : "Null Object Found"});
                res.statusCode=400;
            }
        }).catch((err)=>{
            res.statusCode=400;
            res.statusMessage="Error Occured."+err;
        })
    } 
})



ngoDonationDetails.route('/donatedby/')
.all((req,res,next)=>
{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next();
})
.post((req,res,next)=>{
    const data=req.body; 
    if(data !=null){ 
        Donations.find()
        .populate('requirement')
        .populate('product')
        .populate('ngo')
        .populate('donation_params').
        then((result,err)=>{ 
            if(result!=null || result.length!==0){ 
                // for (let index = 0; index < data.doantion_params.length; index++) {
                //     const element = data.doantion_params[index];
                //     if(element.DonatedBy!=)
                // }
            }
            else{
                res.json({"messege" : "Null Object Found"});
                res.statusCode=400;
            }
        }).catch((err)=>{
            res.statusCode=400;
            res.statusMessage="Error Occured."+err;
        })
    } 
})

module.exports = ngoDonationDetails;
