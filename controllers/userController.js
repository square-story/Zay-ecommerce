const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator');

exports.signUp = async (req, res) => {
    // User sign up logic with OTP
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
