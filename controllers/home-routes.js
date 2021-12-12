const router = require('express').Router();
const path = require('path');


router.get('/', (req, res) => {
  console.log(req.session);

 
});

router.get('/', (req, res) => {
    res.render('homepage');
});
  
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});
  
router.get('/chat', (req, res) => {
   
  res.render('chat');
});
  
router.get('/index', (req, res) => {
    res.render('index')
});

router.get('/signup', (req, res) => {
  res.render('signup')
});

router.get('/login', (req, res) => {
  res.render('login');
});
  
  


module.exports = router;