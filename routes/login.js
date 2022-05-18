const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const bcrypt = require('bcryptjs');

router.get('/',(req,res)=>{
    res.send('get working');
});

router.post('/',async (req,res)=>{
    //Checking if email exist
    const userExist = await User.findOne({email : req.body.email});
    if(!userExist) {
        res.status(400).send('email or password incorrect');
    } else {
        //Checking password
        const validPassword = await bcrypt.compare(req.body.password,userExist.password);
        if(!validPassword) {
            res.status(400).send('email or password incorrect');
        } else {
            //assign token to user
            const token = jwt.sign({_id: userExist._id},process.env.TOKEN);
            console.log(token);
            //res.header('auth',token).send('login successfully');
            res.status(200).send(token);
        }
    }
    

    
    
});

module.exports = router;