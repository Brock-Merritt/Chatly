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
  
router.get('/submit-form', (req, res) => {
    res.render('submit-form')
})
  
  


module.exports = router;
