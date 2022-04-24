const User = require("../models/User")

module.exports = async function(req,res,next){
    try {
        const userexist = await User.findOne({_id:req.params._id});
        next();
    }catch(err){
        res.status(400).send('user dont exist cant generate qrcode');
    }
}