const router = require('express').Router();
const htmlRoutes = require('./html-routes');
const apiRoutes = require('./api-routes');


router.use('/', htmlRoutes);
router.use('/api', apiRoutes);
// router.use('/')

router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;