const express = require('express');
const UserModel = require('../controllers/userController') 

const router = express.Router();


router.post('/applyleave', UserModel);


module.exports = router;