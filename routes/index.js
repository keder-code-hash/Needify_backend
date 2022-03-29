const express = require('express');
const indexRouter = express.Router();
const usersRouter = require('../models/auth_model')
indexRouter.route('./signup')
.get(getSignup)
.post(postSignup)

indexRouter.route('./login')
.post(loginUser)

function getSignup(req, res) {
  res.send('')
}
async function postSignup(req, res) {
  let dataobj = req.body;
  let user = await userModel.create(dataobj);
  
  res.statusCode=200;
  res.json({
    message: 'SignUp req send'
  }) 
}
async function loginUser(req,res){
  try{
    let data=req.body;
    let user=await userModel.findOne({email:data.email});
    if(user){
      //bcrypt--> compare(for hashstring password)
      if(user.password==data.password){
        return req.json({
          message:"User has logged in successfully!",
          userDetails: data
        });
      }else{
        return req.json({
          message:"Wrong credentials"
        })
      }
    }else{
      return req.json({
        message:"User not found"
      })
    }
  }catch(err){
    return req.status(500).json({
      message:err.message
    })
  }
}

module.exports = indexRouter;
