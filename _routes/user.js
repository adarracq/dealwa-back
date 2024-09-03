const express = require('express');
const router = express.Router();

const userCtrl = require('../_controllers/user');
const multer = require('../_middlewares/multer-config');

router.get('/:email', userCtrl.getUserByEmail);
router.get('/id/:id', userCtrl.getUserById);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/:email', userCtrl.updateUser);
router.post('/picture/:email', multer, userCtrl.uploadPicture);
router.post('/zone/:email', userCtrl.addZone);

module.exports = router;