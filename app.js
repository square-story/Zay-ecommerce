//the initial express required from npm pakage manager
const express = require('express'); 
const mongoose = require('mongoose'); //this is use for mongodb connection
const session = require('express-session'); //session handiling wanted
const passport = require('passport'); //for authontication for facebook and google toggle
const bodyParser = require('body-parser'); //parse the data from body
const dotenv = require('dotenv'); //.env file for creditial details

dotenv.config(); //config the dotenv for import

const db = require('./config/db'); //the mongodb connection establish in the config folder
const adminRoutes = require('./routes/adminRoutes'); //admin route folder set
const userRoutes = require('./routes/userRoutes'); //user route folder set
const productRoutes = require('./routes/productRoutes'); //product route folder set

const app = express(); //app for express require app interface

app.use(bodyParser.json()); //parse the json file
app.use(bodyParser.urlencoded({ extended: true })); //urlencoded file wanted

app.use(session({
    //the session config
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

//the passport config file included
require('./config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use('/admin', adminRoutes); //for use admin route
app.use('/', userRoutes); //for use user route
app.use('/product', productRoutes); //for use user route

app.set('view engine', 'ejs'); //set the view engine using ejs

const PORT = process.env.PORT || 3000; //port number set
app.listen(PORT, () => {
    //server listern with in localhost
    console.log(`Server is running on port http://localhost:${PORT}`);
});
