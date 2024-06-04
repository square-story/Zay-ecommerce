const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.use(express.static('public'))

router.get('/',userController.home)
router.get('/home',userController.home)
router.get('/signin', userController.signPageLoader);
// router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.get('/auth/google', userController.googleSignIn);
router.get('/auth/facebook', userController.facebookSignIn);

module.exports = router;
