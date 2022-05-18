const router = require('express').Router();
const changeProfile = require('../controllers/changeProfile');
const generateURLDownload = require('../controllers/s3Download');
const generateURLUpload = require('../controllers/s3Upload');
const auth = require('./auth');
const User = require('../models/User');

router.get('/',auth,async(req,res)=>{
    try{
        const profile = await User.findOne({_id: req.userId});
        res.status(200).send(profile);
    }catch(err){
        res.status(400).send("can t afford data");
}})

router.get('/edit',auth,async (req,res)=>{
    try{
        const profile = await User.findOne({_id: req.userId});
        res.status(200).send(profile);
    }catch(err){
        res.status(400).send("can t afford data");
    }
})

router.post('/edit',auth,(req,res)=>{
    try{
        changeProfile(req);
        res.status(200).send("its working");
    }catch(err){
        res.status(400).send("can t afford data");
    }
})

router.get('/edit/upload',auth,async(req,res)=>{
    try{
        const ihni =await generateURLUpload(req.userId);
        console.log(req.userId);
        res.status(200).send(ihni);
    }catch(err){
        res.status(400).send("can t generate upload data");
    }
})

router.get('/edit/download',auth,async(req,res)=>{
    try{
        const newImg = await generateURLDownload(req.userId);
        res.status(200).send(newImg);
    }catch(err){
        res.status(400).send("can t generate download data");
    }
})

module.exports = router;