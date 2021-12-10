const router = require('express').Router();
const homeRoutes = require('./home-routes');
// const apiRoutes = require('../doweneedit/api-routes');


const userRoutes = require('./api/user-routes');

router.use('/users', userRoutes);




router.use('/', homeRoutes);
// router.use('/', apiRoutes);
// // router.use('/')

router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;