const UserModel=require('./models/UserSchema') 

const AdminBro = require('admin-bro');
const mongooseAdminBro = require('@admin-bro/mongoose');
const expressAdminBro = require('@admin-bro/express');

// Database
const connection = require('./Connection');

connection.once('open', ()=>console.log('Database connected Successfully'));
connection.on('error',()=>console.log('Error', err));
 
AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {
  resources: [UserModel],
}

const adminBro = new AdminBro(AdminBroOptions)
const router = expressAdminBro.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router) 