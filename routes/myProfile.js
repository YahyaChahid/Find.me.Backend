const router = require('express').Router();
const changeProfile = require('../controllers/changeProfile');
const auth = require('./auth');

router.get('/',auth,(req,res)=>{
    res.send("user " + req.userId + "is connected");
})

router.get('/edit',auth,(req,res)=>{
    res.send("edit user" + req.userId );
})

router.post('/edit',auth,changeProfile,(req,res)=>{
    res.send("user " + req.userId + "modified");
})

module.exports = router;