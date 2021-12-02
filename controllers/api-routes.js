const router = require('express').Router();
const views = require('../server');
const users = require('../models/User');


router.post('/submit-form', (req, res) => {
    const username = req.body.username
    console.log(req.body);
    
    
    res.render('submit-form')
});

router.post('/submit-form', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;