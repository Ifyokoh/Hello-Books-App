const express = require('express')
	router = express.Router();

router.use('/books', require('./books'));
router.use('/users', require('./users'));

module.exports = router;