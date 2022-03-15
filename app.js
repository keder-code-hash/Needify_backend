 
const mongoose=require('mongoose') 
 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


var app = express(); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); 
app.use('/', indexRouter);
app.use('/users', usersRouter);
 



const contentParent = {
  name: 'content',
  icon: 'Accessibility',
}
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs') 
const res=require('@admin-bro/mongoose')
AdminBro.registerAdapter(res)

const UserModel=require('./models/UserSchema')
const AcheivementModel=require('./models/Achievements')
const EventModel=require('./models/Events')
const NgoModel =require('./models/Ngo')
const ProductModel = require('./models/product')

const mongooseDb = mongoose.connect('mongodb+srv://rajib005:rajib@cluster0.wkthe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true })

const adminBro = new AdminBro({ 
  resources: [
    {resource: UserModel},
    {resource: AcheivementModel},
    {resource: EventModel},
    {resource: NgoModel},
    {resource: ProductModel}
  ], 
  branding: {
    companyName: 'Needify ',
  }, 
  rootPath: '/admin',
})
 
const router = AdminBroExpressjs.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

 



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
