const express = require('express');
const router = express.Router();

const agentCtrl = require('../_controllers/agent');
const multer = require('../_middlewares/multer-config');

router.get('/:email', agentCtrl.getAgentByEmail);
router.get('/id/:id', agentCtrl.getAgentById);
router.post('/', agentCtrl.createAgent);
router.put('/:email', agentCtrl.updateAgent);
router.post('/zone/:email', agentCtrl.addZones);

module.exports = router;