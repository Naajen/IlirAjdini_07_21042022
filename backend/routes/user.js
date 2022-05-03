const express = require('express');
const router = express.Router();

//importation du controllers/user.js
const userCtrl = require('../controllers/user');

//la route (endpoint) signup + le mdlware password doit avoir un mdp plus élaboré
router.post('/signup', userCtrl.signup);
//la route (endpoint) login
//router.post('/login',  userCtrl.login);

//exportation du module
module.exports = router;