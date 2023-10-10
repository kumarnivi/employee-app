const express = require('express');
const { UserModel, getAllRecords, getSingleRecord}  = require('../controllers/userController') 

const router = express.Router();


router.post('/applyleave', UserModel);

router.get('/getAllRecords', getAllRecords);

router.get('/records/:id', getSingleRecord);

module.exports = router;