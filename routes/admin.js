const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/get-cricket/:name', adminController.getCricket);
router.post('/insert-cricket', adminController.insertCricket);
//edit


module.exports = router;