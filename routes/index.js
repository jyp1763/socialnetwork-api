const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('../routes/api/user-routes');

router.use('/thoughts', thoughtRoutes);
router.use('./user', userRoutes);

module.exports = router;