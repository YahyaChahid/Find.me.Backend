const User = require("../models/User")

module.exports = async function(req,res,next){
    try {
        const filter ={_id:req.userId};
        const update = {fullname : req.body.fullname,
                        email : req.body.email,
                        phone : req.body.phone,
                        country : req.body.country,
                        city : req.body.city,
                        address : req.body.address};
        const userChanged = await User.findOneAndUpdate(filter,update,{
            new : true
        });
        res.status(200).send('modified successfuly');
        next();
    } catch(err){
        res.status(400).send('cannot change profile');
    }
}