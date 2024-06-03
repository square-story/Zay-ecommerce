const User = require('../models/user');
const Category = require('../models/category');
const Product = require('../models/product');

exports.adminSignIn = async (req, res) => {
    try {
        res.render('admin/sign-in')
    } catch (error) {
        console.error(error)
    }
};

exports.userManagement = async (req, res) => {
    // List users, block/unblock logic
};

exports.categoryManagement = async (req, res) => {
    // Add, edit, delete categories logic
};

exports.productManagement = async (req, res) => {
    // Add, edit, delete products logic
};
