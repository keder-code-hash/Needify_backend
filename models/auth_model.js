// ngo normal_user
const express = require('express')
const mongoose = require('mongoose');
const { number } = require('prop-types');

// app.listen(3000)
// app.use(express.json());

const db_link = "mongodb+srv://rajib005:rajib@cluster0.wkthe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(db_link)
    .then(function (db) {
        console.log("db is connected")
    }).catch(function (err) {
        console.log(err);
    })

//Schemas

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

const AdminSchema = mongoose.Schema({
    ngoName: {
        type: String,
        required: true
    },
    RegNo :{
        type: number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phoneNo : {
        type : number,
        required : true,
    }
})

//models

const userModel = mongoose.model('userModel', userSchema);
(async function createUser() {
    let user = {
        firstName: 'Rajib',
        lastName: 'Nasipuri',
        email: 'abc@gmail.com',
        password: '123456',
        min: 6
    }
    let data = await userModel.create(user);
    console.log(data);
})();



const AdminModel = mongoose.model('AdminModel', AdminSchema);
(async function createUser() {
    let admin = {
        ngoName: 'Abc',
        RegNo: 1234567,
        email: 'cdef@gmail',
        password: 'abc123456',
        min: 6
    }
    let data = await AdminModel.create(admin);
    console.log(data);
})();