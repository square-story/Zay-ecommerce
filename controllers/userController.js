const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator');
exports.home = async(req,res)=>{
    try {
        res.render('user/home')
    } catch (error) {
        console.error(error)
    }
}
exports.signUpLoader = async(req, res)=>{
    try {
        res.render('user/signUp')
    } catch (error) {
        console.error(error)
    }
}
exports.signInLoader = async(req, res)=>{
    try {
        res.render('user/signIn')
    } catch (error) {
        console.error(error)
    }
}
exports.signUp = async (req, res) => {
    
};

exports.signIn = async (req, res) => {
    // User sign in logic
};

exports.googleSignIn = async (req, res) => {
    // Google sign-in logic
};

exports.facebookSignIn = async (req, res) => {
    // Facebook sign-in logic
};
