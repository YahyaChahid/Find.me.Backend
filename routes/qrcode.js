const router = require('express').Router();
const code = require('./../controllers/qrcode');

router.get('/',code,(req,res)=>{
    res.send(req.code);
})

module.exports = router;