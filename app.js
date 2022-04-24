const express = require('express');
const dotenv = require('dotenv');
const home = require('./routes/home');
const register = require('./routes/register');
const login = require('./routes/login');
const myProfile = require('./routes/myProfile');
const anyProfile = require('./routes/anyProfile');
const qrcode = require('./routes/qrcode');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

dotenv.config({
    path : ".env"
});

// Constants from .env file
const PORT = parseInt(process.env.PORT);
const HOST = process.env.HOST;

// Middleware
app.use(bodyParser.json({ extended : true}));
app.use(cors());
app.use(morgan('dev'));


// Connection to MongoDB
mongoose.connect(HOST, {useNewUrlParser : true}, ()=>{
    console.log('connected to db');
})

// Routes Middleware
app.use('/home',home);
app.use('/register',register);
app.use('/login',login);
app.use('/myprofile',myProfile);
app.use('/profile',anyProfile);
app.use('/qrcode',qrcode);

// Starting the server
app.listen(PORT, () => {
    console.log('app running on http://localhost:'+ PORT);
})