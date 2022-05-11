const User = require('../models/User');

const router = require('express').Router()

router.get('/:_id',async (req,res)=>{
    //search profile using id
    try{
        const profile = await User.findOne({_id: req.params._id});
        res.send(profile);
    }catch(err){
        res.status(400).send('profile doesnt exist');
    }

})

module.exports = router;