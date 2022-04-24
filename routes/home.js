const router = require('express').Router();

// Home Router
router.get('/', (req,res) => {
    res.send('working');
})

module.exports = router;