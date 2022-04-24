const jwt = require('jsonwebtoken');

module.exports= function (req,res,next){
    //Checking user token
    const token=req.header('auth');
    if(!token) res.status(400).send('not authorise');
    try {
        const authorised = jwt.verify(token,process.env.TOKEN);
        const id = authorised._id;
        req.userId =id;
        next();
    }catch(err){
        res.status(400).send('not authorise');
    }
}