const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
router.get('/', adminController.adminSignIn);
router.get('/users', adminController.userManagement);
router.post('/category', adminController.categoryManagement);
router.post('/product', adminController.productManagement);

module.exports = router;
