const express = require('express');
const router = express.Router();

const userCtrl = require('../_controllers/agent');
const multer = require('../_middlewares/multer-config');

router.get('/:email', userCtrl.getAgentByEmail);
router.get('/id/:id', userCtrl.getAgentById);
router.post('/', userCtrl.createAgent);
router.put('/:email', userCtrl.updateAgent);
router.post('/zone/:email', userCtrl.addZones);

module.exports = router;