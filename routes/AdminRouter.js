const mongoose=require("mongoose");
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs') 
const res=require('@admin-bro/mongoose')

AdminBro.registerAdapter(res)



const UserModel=require('../models/UserSchema')
const AcheivementModel=require('../models/Achievements')
const EventModel=require('../models/Events')
const NgoModel =require('../models/Ngo')
const ProductModel = require('../models/product')
const RequirementsModel=require('../models/Requirements')
const DonationModel = require('../models/DonationAmount')
const UserRoleModel = require('../models/UserRoles')

const mongooseDb = mongoose.connect('mongodb+srv://rajib005:rajib@cluster0.wkthe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true })

const adminBro = new AdminBro({ 
    resources: [
        {resource: UserModel},
        {resource: AcheivementModel},
        {resource: EventModel},
        {resource: NgoModel},
        {resource: ProductModel},
        {resource : RequirementsModel},
        {resource : DonationModel},
        {resource : UserRoleModel} 
    ], 
    branding: {
        companyName: 'Needify ',
    }, 
    rootPath: '/admin',
})

const router = AdminBroExpressjs.buildRouter(adminBro)

module.exports = { router,adminBro };