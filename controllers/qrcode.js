const QRcode = require('qrcode');

module.exports = function(req,res,next){
    try{
        const link = "http://localhost:3001/profile/625c75a90984d74a0b1ecb3f";
        QRcode.toDataURL(link,{type:'terminal'},(err,url)=>{
            req.code = url;
            next();
        })
    } catch(err){
        res.status(400).send('can t generate qrcode');
    }
   
}
 
