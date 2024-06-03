const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.get('/',userController.home)
router.get('/home',userController.home)
router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.get('/auth/google', userController.googleSignIn);
router.get('/auth/facebook', userController.facebookSignIn);

module.exports = router;
