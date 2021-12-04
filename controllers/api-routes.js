const router = require('express').Router();
const views = require('../server');
const users = require('../models/user');


router.post('/chat', (req, res) => {
   
    console.log(req.body);
    
    
    res.render('chat')
});

// router.post('/chat', (req, res) => {
//     // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
//     User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password
//     })
//       .then(dbUserData => res.json(dbUserData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });

module.exports = router;