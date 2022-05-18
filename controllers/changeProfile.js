const User = require("../models/User")

module.exports = async function(req){
    try {
        const filter ={_id:req.userId};
        const update = {fullname : req.body.fullname,
                        email : req.body.email,
                        phone : req.body.phone,
                        country : req.body.country,
                        city : req.body.city,
                        address : req.body.address,
                        profileImg : req.signedUrl};
        const userChanged = await User.findOneAndUpdate(filter,update,{
            new : true
        });
        console.log("modified successfuly");
        return "done";
    } catch(err){
        console.log("can t modified");
        return "yikes";
    }
}