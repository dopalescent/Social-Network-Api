const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/thoughs', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
