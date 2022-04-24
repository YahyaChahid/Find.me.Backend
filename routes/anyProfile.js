const User = require('../models/User');

const router = require('express').Router()

router.get('/:_id',async (req,res)=>{
    //search profile using id
    const profile = await User.findOne({_id: req.params._id.toString()});
    if(!profile) res.status(400).send('this profile doesnt exist');
    res.send(profile);

})

module.exports = router;