const router = require('express').Router();
const apiRoutes = require('./api-routes');

const htmlRoutes = require('./html-routes');



router.use('/', htmlRoutes);
router.use('/api', apiRoutes);
// router.use('/')

router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;