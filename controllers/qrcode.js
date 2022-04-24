const QRcode = require('qrcode');

module.exports = function(req,res,next){
    try{
        const link = "http://localhost:"+ process.env.PORT +"/qrcode/"+ req.params._id;
        QRcode.toDataURL(link,{type:'terminal'},(err,url)=>{
            req.code = url;
            next();
        })
    } catch(err){
        res.status(400).send('can t generate qrcode');
    }
   
}
 
