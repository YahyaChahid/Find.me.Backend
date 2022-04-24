const router = require('express').Router();
const code = require('./../controllers/qrcode');
const userExist = require('./../controllers/userExist');

router.get('/:_id',userExist,code,(req,res)=>{
    res.send(req.code);
})

module.exports = router;