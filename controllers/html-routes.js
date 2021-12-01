const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('homepage');
});
  
router.get('/dashboard', (req, res) => {
    console.log(`dashboard`);
    res.render('dashboard');
});
  
router.get('/chat', (req, res) => {
    res.render('chat');
});
  
router.get('')
  
  


module.exports = router;
