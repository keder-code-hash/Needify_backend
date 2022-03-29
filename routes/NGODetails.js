/**
 * 1. insert / update all details of any NGO details
 * 2. add/update any member details
 * 3. add/update any achievements details
 * 4. add/update any events details
 */
//..
// {
//     ngodetails:{},
//     achievements:[{}],
//     events:[{}],
//     members:[{}]
// }
const express = require('express');
const NgoModel = require('../models/Ngo');
const ngoRouter = require('../models/Ngo');

ngoRouter.route('./ngodetails')
.get(getNgodetails)
.post(postNgodetails)

function getNgodetails(req, res){
    res.send(ngoUser)
}

async function postNgodetails(req, res){
    let data = req.body();
    let ngoUser = await NgoModel.create(data);
    res.json({
        message: 'ngo details created'
    })
}
 function updateNgoDetails(req,res){
    let updateData=req.body();
    for(i in updateData){
        data[i]=updateData[i];
    }
    res.json({
        message:'update ngoDetalis'
    })

}

module.exports = ngoRouter

