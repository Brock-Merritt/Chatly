const router = require('express').Router();
const htmlRoutes = require('./html-routes');
const apiRoutes = require('./api-routes');


const userRoutes = require('./user-routes');

router.use('/users', userRoutes);




router.use('/', htmlRoutes);
router.use('/', apiRoutes);
// router.use('/')

router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;