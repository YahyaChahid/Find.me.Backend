const router = require('express').Router();
const auth = require('./auth');

router.get('/',auth,(req,res)=>{
    res.send("user " + req.userId + "is connected");
})

module.exports = router;