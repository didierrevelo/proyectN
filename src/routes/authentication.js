const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isloggedin, isNotLoggedin } = require('../lib/auth');

router.get('/signup', isNotLoggedin, (req, res) => {
    res.render('auth/signup')
});

router.post('/signup', isNotLoggedin, passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/signin', isNotLoggedin, (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', isNotLoggedin, (req, res) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res);
});

router.get('/profile', isloggedin, (req, res) => {
    res.render('profile');
});

router.get('/logout', isloggedin, (req, res) => {
    req.logout();
    res.redirect('/signin')
});

module.exports = router;