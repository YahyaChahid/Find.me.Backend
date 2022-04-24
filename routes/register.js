const router = require('express').Router();
const User = require('../models/User');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

router.get('/', (req,res) => {
    res.send('get register working');
})

router.post('/', async (req,res) => {

    //Check is user already exist
    const emailExist = await User.findOne({
        email: req.body.email
    })

    if(emailExist) return res.status(400).send('user already exist');

    //Hashing password
    const salt = await bcrypt.genSalt(10);
    
    const hashedPassword = await bcrypt.hash(req.body.password,salt);
    
    //Create new user
    const user = new User({
        fullname :req.body.fullname,
        email : req.body.email,
        password : hashedPassword,
        phone : req.body.phone,
        country : req.body.country,
        city : req.body.city,
        address : req.body.address 
    });

    try {
        await user.save();
        
    }catch(err){
        res.status(400).send(err.message);
    }
    
    res.send('user added');
    
})

module.exports = router;